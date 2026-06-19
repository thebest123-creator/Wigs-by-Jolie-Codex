import type { Metadata } from "next";
import { ConsultationForm } from "@/components/ConsultationForm";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { business, serviceInterests, type ServiceInterestId } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Book a Visit",
  description:
    "Ask Jolie for help with wigs, toppers, extensions, styling, and care in Deerfield Beach.",
  alternates: {
    canonical: "/consultation",
  },
};

function normalizeInterest(value?: string): ServiceInterestId {
  const found = serviceInterests.find((interest) => interest.id === value);
  return found?.id ?? "not-sure";
}

export default async function ConsultationPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const params = await searchParams;
  const interest = normalizeInterest(params.interest);

  return (
    <main id="main">
      <section className="subpage-hero">
        <div className="site-shell subpage-grid">
          <div>
            <p className="eyebrow">Private consultation</p>
            <h1>Book time with Jolie.</h1>
            <p>
              Tell Jolie what kind of hair help you want. She will reply before the visit is set.
            </p>
          </div>
          <PlaceholderImage id="WBJ-consultation-portrait" variant="portrait" tone="rose" />
        </div>
      </section>

      <section className="section form-section">
        <div className="site-shell form-grid">
          <div>
            <h2>Send a request</h2>
            <p>
              Not sure what you need? Choose help me choose. Jolie can guide you.
            </p>
            <div className="quiet-contact">
              <a href={business.phoneHref}>Call {business.phoneDisplay}</a>
              <a href={business.emailHref}>{business.email}</a>
            </div>
          </div>
          <ConsultationForm initialInterest={interest} />
        </div>
      </section>
    </main>
  );
}
