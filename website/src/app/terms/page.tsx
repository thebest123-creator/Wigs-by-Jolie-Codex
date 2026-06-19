import type { Metadata } from "next";
import { business } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms",
  description: "Website terms notes for Wigs by Jolie.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main id="main" className="legal-page">
      <div className="site-shell legal-copy">
        <p className="eyebrow">Terms</p>
        <h1>Website terms notes</h1>
        <p>
          This website provides general business and consultation-request
          information for Wigs by Jolie. A request submitted or prepared through
          this website is not a confirmed appointment until Wigs by Jolie
          responds directly.
        </p>
        <p>
          Contact Jolie directly for appointment confirmation and service
          questions.
        </p>
        <p>
          Contact Wigs by Jolie at <a href={business.emailHref}>{business.email}</a>.
        </p>
      </div>
    </main>
  );
}
