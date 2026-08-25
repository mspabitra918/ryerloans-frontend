import { AdminUser, getToken, clearAuth } from "./auth";
import {
  AdminStats,
  ApplicationFormData,
  LoanApplication,
  Paginated,
} from "./types";

export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? " http://localhost:4000";

// export const API_BASE =
// process.env.NEXT_PUBLIC_API_BASE_URL ??
// "https://lakeside-loans-backend.vercel.app";

export const DEFAULT_PAGE_SIZE = 20;

export interface AdminListParams {
  q?: string;
  page?: number;
  limit?: number;
  date?: string;
  tzOffset?: number;
}

// Serialises list params, dropping empty values so an untouched search box does
// not send `?q=` (which the backend would treat as a real, always-empty filter).
function buildQuery(params: AdminListParams): string {
  const search = new URLSearchParams();

  if (params.q?.trim()) {
    search.set("q", params.q.trim());
  }

  if (params.date) {
    search.set("date", params.date);
    // Let the backend resolve `date` against the admin's local calendar day.
    search.set("tzOffset", String(new Date().getTimezoneOffset()));
  }

  search.set("page", String(params.page ?? 1));
  search.set("limit", String(params.limit ?? DEFAULT_PAGE_SIZE));

  return `?${search.toString()}`;
}

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  // Admin endpoints are guarded by JWT; attach the bearer token when one is
  // present (client-side only — getToken returns null during SSR, which is
  // fine for the public endpoints rendered on the server).
  const token = getToken();
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init?.headers ?? {}),
    },
    // Status/lookup data must always be fresh.
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 401) {
      // Token expired or invalid: clear client-side state and force login.
      try {
        clearAuth();
        if (typeof window !== "undefined") {
          window.location.href = "/admin/login?session=expired";
        }
      } catch {
        // ignore
      }
    }
    let message = `Request failed (${res.status})`;
    try {
      const body = await res.json();
      if (body?.message) {
        message = Array.isArray(body.message)
          ? body.message.join(", ")
          : body.message;
      }
    } catch {
      /* non-JSON error body — keep the default message */
    }
    throw new ApiError(message, res.status);
  }

  return res.json() as Promise<T>;
}

/**
 * Multipart sibling of `request`.
 *
 * The Content-Type header is deliberately absent: `fetch` derives it from the
 * FormData along with the multipart boundary, and setting it by hand produces
 * a boundary-less header that every server parses as an empty body.
 */
async function upload<T>(path: string, form: FormData): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    body: form,
    cache: "no-store",
  });

  if (!res.ok) {
    let message = `Upload failed (${res.status})`;

    try {
      const body = await res.json();
      if (body?.message) {
        message = Array.isArray(body.message)
          ? body.message.join(", ")
          : body.message;
      }
    } catch {
      /* non-JSON error body — keep the default message */
    }

    throw new ApiError(message, res.status);
  }

  return res.json() as Promise<T>;
}

// What POST /api/loan-applications actually returns. The API deliberately
// echoes back only the reference and state — no decision, and no PII.
export interface ApplyResponse {
  reference: string;
  status: string;
  submittedAt: string;
}

/** What every §6.1 borrower action returns: the reference and the new step. */
export interface BorrowerActionResult {
  reference: string;
  status: string;
  message: string;
}

/** One step of the §6.2 four-step tracker. */
export interface TrackerStep {
  status: "completed" | "pending" | "not_started" | "declined" | string;
  timestamp: string | null;
}

/**
 * §6.2 public tracker.
 *
 * Mirrors ApplicationStatusService.lookup exactly. It carries no PII beyond a
 * masked account tail — the endpoint is reachable with an Application ID and an
 * email address, so everything on it is written to be safe in that hands.
 */
export interface PublicStatusResponse {
  application_id: string;
  submitted_at: string | null;
  status: string;
  amount_requested: number;

  tracker: {
    application_received: TrackerStep;
    bank_verification: TrackerStep;
    verification_deposit: TrackerStep;
    final_status: TrackerStep;
  };

  bank_verified: boolean;
  called_in: boolean;

  /** Null once verified. Carries no identifier — see the service comment. */
  bank_verification_url: string | null;

  account_last4: string | null;
  routing_last4: string | null;

  adverse_action: {
    reference: string | null;
    reapply_eligible_date: string | null;
  } | null;

  call_banner: { message: string; phone: string } | null;

  standing_notice: string;
}

/**
 * The two steps a borrower can re-open for themselves from the tracker.
 *
 * Agreement signature is not one of them — that link only ever comes by email.
 */
export type SelfServicePurpose = "bank_verification" | "deposit_confirmation";

/** A freshly minted single-use link, as a path on this origin. */
export interface ActionLinkResponse {
  purpose: SelfServicePurpose;
  path: string;
  expires_at: string;
}

/** One file the borrower has attached to an open §8.4 document request. */
export interface BorrowerDocument {
  id: string;
  doc_type: string;
  doc_type_label: string;
  original_filename: string;
  size_bytes: number;
  created_at: string;
}

/**
 * Everything the upload page renders.
 *
 * An expired, unknown or already-closed token is a flat 404 with one message
 * for all three — the backend deliberately does not say which.
 */
export interface DocumentRequestView {
  reference: string;
  first_name: string;
  note: string | null;
  expires_at: string;
  doc_types: Array<{ value: string; label: string }>;
  documents: BorrowerDocument[];
  /** Server-side ceiling, mirrored here so the page can reject early. */
  max_bytes: number;
  accepted_mime_types: string[];
}

export const api = {
  // Submit a new loan application. Returns the reference the applicant uses to
  // look the application up later.
  async apply(payload: ApplicationFormData): Promise<ApplyResponse> {
    return request<ApplyResponse>("/applications", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  //   async createContacts(payload: ContactsPayload) {
  //     const data = await request(`/contact/create`, {
  //       method: "POST",
  //       body: JSON.stringify(payload),
  //     });
  //     return data;
  //   },

  // --- Borrower one-time-link actions (§6.1) --------------------------------
  //
  // Each is authenticated by the token from the borrower's email, not a
  // session. The token travels in the body rather than the URL so it does not
  // land in an access log or a Referer header.

  // Public status lookup: Application ID + email, both must match one record.
  async publicStatus(applicationId: string, email: string) {
    const query = new URLSearchParams({
      application_id: applicationId.trim().toUpperCase(),
      email: email.trim(),
    });

    return request<PublicStatusResponse>(
      `/applications/public/status?${query.toString()}`,
    );
  },

  /**
   * Ask for a live link for a step the tracker is showing as outstanding.
   *
   * Same two fields as publicStatus, because it is the same bar: the tracker
   * that showed the borrower this step is what authorises re-opening it. The
   * response is a path, not a token — the caller navigates to it and the flow
   * behind it does its own checks.
   */
  async requestActionLink(
    applicationId: string,
    email: string,
    purpose: SelfServicePurpose,
  ) {
    return request<ActionLinkResponse>("/applications/public/action-link", {
      method: "POST",
      body: JSON.stringify({
        application_id: applicationId.trim().toUpperCase(),
        email: email.trim(),
        purpose,
      }),
    });
  },

  // Plaid Link: mint the session token, then hand back what Link returns.
  async createPlaidLinkToken(token: string) {
    return request<{ link_token: string; expiration: string }>(
      "/plaid/link-token",
      { method: "POST", body: JSON.stringify({ token }) },
    );
  },

  async exchangePlaidPublicToken(token: string, publicToken: string) {
    return request<BorrowerActionResult>("/plaid/exchange", {
      method: "POST",
      body: JSON.stringify({ token, public_token: publicToken }),
    });
  },

  async signAgreement(token: string, fullName: string) {
    return request<BorrowerActionResult>("/applications/agreement/sign", {
      method: "POST",
      body: JSON.stringify({ token, full_name: fullName }),
    });
  },

  async confirmDeposit(token: string, cents1: number, cents2: number) {
    return request<BorrowerActionResult>(
      "/applications/verification-deposit/confirm",
      {
        method: "POST",
        body: JSON.stringify({
          token,
          amount_1_cents: cents1,
          amount_2_cents: cents2,
        }),
      },
    );
  },

  // --- §8.4 document upload link -------------------------------------------
  //
  // The token is in the path here rather than the body: a multipart upload has
  // no JSON body to hide it in. It still names exactly one document request
  // and it expires.
  //
  // Two calls, because that is the whole flow: read the checklist an admin
  // sent, then add files to it. Each upload is visible in the admin panel the
  // moment it lands, so there is nothing to submit afterwards.

  async documentRequest(token: string) {
    return request<DocumentRequestView>(
      `/documents/${encodeURIComponent(token)}`,
    );
  },

  async uploadDocument(token: string, docType: string, file: File) {
    const form = new FormData();

    form.append("doc_type", docType);
    form.append("file", file);

    return upload<BorrowerDocument>(
      `/documents/${encodeURIComponent(token)}`,
      form,
    );
  },

  // --- Admin ---------------------------------------------------------------

  // Exchanges credentials for a JWT. Persisting the token is the caller's job
  // (see lib/auth.ts) so this stays usable from anywhere.
  async login(email: string, password: string) {
    const data = await request<{
      message: string;
      data: { token: string; user: AdminUser };
    }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    return data.data;
  },

  async getStats(): Promise<AdminStats> {
    return request<AdminStats>("/admin/stats");
  },

  async getApplications(
    params: AdminListParams = {},
  ): Promise<Paginated<LoanApplication>> {
    const data = await request<{
      applications: LoanApplication[];
      total: number;
      page: number;
      limit: number;
    }>(`/loan-applications/applications${buildQuery(params)}`);
    return {
      items: data.applications ?? [],
      total: data.total ?? 0,
      page: data.page ?? 1,
      limit: data.limit ?? DEFAULT_PAGE_SIZE,
    };
  },

  async getApplication(applicationId: string): Promise<LoanApplication> {
    const data = await request<{ loan: LoanApplication }>(
      `/loan-applications/applications/${encodeURIComponent(applicationId)}/admin`,
    );
    return data.loan;
  },
};
