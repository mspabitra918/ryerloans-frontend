import levenshtein from "fast-levenshtein";

// Layer 1: RFC 5322 Regex
const RFC_5322_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Popular domains for Levenshtein typo suggestion
const COMMON_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "aol.com",
  "icloud.com",
  "comcast.net",
  "verizon.net",
  "att.net",
  "sbcglobal.net",
  "msn.com",
  "live.com",
  "me.com",
  "mac.com",
  "bellsouth.net",
  "cox.net",
  "charter.net",
  "earthlink.net",
  "roadrunner.com",
  "protonmail.com",
  "ymail.com",
];

// Layer 2: Common TLD typos
const BROKEN_TLDS = ["con", "comm", "cmo", "co.m", "cm", "gnail"];

// Layer 5: Frontend Disposable Domain List
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "tempmail.com",
  "10minutemail.com",
  "yopmail.com",
  "trashmail.com",
  "sharklasers.com",
  "dispostable.com",
  "getnada.com",
]);

export interface ClientEmailValidationResult {
  isValid: boolean;
  suggestion: string | null;
  error?: string;
}

export function validateEmailClient(
  email: string,
): ClientEmailValidationResult {
  const trimmed = email.trim().toLowerCase();

  if (!trimmed) {
    return { isValid: false, suggestion: null };
  }

  // Layer 1: RFC 5322 Check
  if (!RFC_5322_REGEX.test(trimmed)) {
    return {
      isValid: false,
      suggestion: null,
      error: "Please enter a valid email address.",
    };
  }

  const [username, domain] = trimmed.split("@");
  if (!domain) {
    return {
      isValid: false,
      suggestion: null,
      error: "Please enter a valid email address.",
    };
  }

  const domainParts = domain.split(".");
  const tld = domainParts[domainParts.length - 1];

  // Layer 2: Broken TLD check
  if (BROKEN_TLDS.includes(tld)) {
    return {
      isValid: false,
      suggestion: null,
      error: "Invalid domain ending. Did you mean '.com'?",
    };
  }

  // Layer 5: Disposable check
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return {
      isValid: false,
      suggestion: null,
      error: "Disposable email addresses are not allowed.",
    };
  }

  // Layer 3: Levenshtein Typo Check (distance <= 2)
  let suggestion: string | null = null;
  for (const targetDomain of COMMON_DOMAINS) {
    if (domain === targetDomain) break;

    const distance = levenshtein.get(domain, targetDomain);
    if (distance <= 2) {
      suggestion = `${username}@${targetDomain}`;
      break;
    }
  }

  return { isValid: true, suggestion };
}

/**
 * Layer 4: Client-side MX lookup using Google Public DNS (DNS-over-HTTPS)
 */
export async function checkDomainMXFrontend(email: string): Promise<boolean> {
  try {
    const domain = email.trim().toLowerCase().split("@")[1];
    if (!domain) return false;

    // Call Google DNS over HTTPS to check MX records (Type 15 = MX)
    const res = await fetch(
      `https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=MX`,
    );
    const data = await res.json();

    // Status 0 means NOERROR, and Answer contains MX records
    return (
      data.Status === 0 && Array.isArray(data.Answer) && data.Answer.length > 0
    );
  } catch {
    // If browser block or network issue, fail open to avoid blocking valid user
    return true;
  }
}
