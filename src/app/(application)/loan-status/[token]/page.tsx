import { redirect } from "next/navigation";

/**
 * `/loan-status/<anything>` is not a route we ever hand out.
 *
 * It existed as an empty component, so every borrower who mistyped the tracker
 * URL — or followed a truncated one out of an email client — got a blank white
 * page instead of the lookup form. The tracker is authenticated by the
 * Application ID and email the borrower types, not by a token, so there is
 * nothing here to render: send them to the form.
 */
export default function LoanStatusTokenPage() {
  redirect("/loan-status");
}
