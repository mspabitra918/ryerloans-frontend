export type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
};

export type AdminStats = {
  totalApplications?: number;
  pending?: number;
  funded?: number;
  declined?: number;
  [key: string]: any;
};

export type LoanApplication = {
  id: string;
  reference?: string;
  status?: string;
  submittedAt?: string;
  amount?: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  [key: string]: any;
};

export * from "./application";
