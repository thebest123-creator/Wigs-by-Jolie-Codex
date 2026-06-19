import type { Metadata } from "next";
import { business } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notes for the Wigs by Jolie website.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="legal-page">
      <div className="site-shell legal-copy">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy notes</h1>
        <p>
          This website is designed to collect only the contact details needed to
          help Wigs by Jolie respond to a consultation request.
        </p>
        <p>
          The current consultation request flow prepares contact details on the
          visitor&apos;s device and does not claim a confirmed appointment.
        </p>
        <p>
          Contact Wigs by Jolie at <a href={business.emailHref}>{business.email}</a>.
        </p>
      </div>
    </main>
  );
}
