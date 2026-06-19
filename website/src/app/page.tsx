import Image from "next/image";
import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import {
  business,
  consultationSteps,
  googleReviewProof,
  reviewSummary,
} from "@/lib/site-data";

export default function Home() {
  return (
    <main id="main">
      <section className="hero-section">
        <PlaceholderImage id="WBJ-hero-consultation" variant="panorama" tone="rose" />
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Wigs, toppers, extensions, care</p>
            <h1>Elegance defined by artistry.</h1>
            <p className="hero-lede">
              Premium custom wigs, expert styling, and private guidance made to
              look and feel naturally you.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/consultation">
                Book Your Consultation
              </Link>
              <Link className="button button-outline" href="/#services">
                Explore Services
              </Link>
            </div>
            <div className="hero-stats" aria-label="Wigs by Jolie highlights">
              <div>
                <strong>10+</strong>
                <span>Years of artistry</span>
              </div>
              <div>
                <strong>1:1</strong>
                <span>Private boutique</span>
              </div>
              <div>
                <strong>Google</strong>
                <span>Review profile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Review and service highlights">
        <div className="proof-grid">
          <a href={reviewSummary.href} className="proof-item">
            <strong>{reviewSummary.rating}</strong>
            <span>{reviewSummary.reviews}</span>
          </a>
          <a href={reviewSummary.href} className="proof-item">
            <strong>Open Google</strong>
            <span>Review profile</span>
          </a>
          <div className="proof-item">
            <strong>Personal fit</strong>
            <span>Tailored to you</span>
          </div>
          <div className="proof-item">
            <strong>Policy questions</strong>
            <span>Call Jolie directly</span>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="section boutique-proof-section"
        aria-labelledby="boutique-proof-title"
      >
        <div className="site-shell boutique-proof-grid">
          <div className="boutique-proof-copy">
            <p className="eyebrow eyebrow-light">Inside the boutique</p>
            <h2 id="boutique-proof-title">Deerfield Beach wig help, tailored around you.</h2>
            <p>
              Wigs by Jolie offers high-end wigs, human hair and synthetic options,
              hairpieces, men&apos;s pieces, extensions, and toppers with private guidance
              around comfort, color, coverage, and daily wear.
            </p>
            <Link className="button button-light" href="/consultation">
              Book a Private Consultation
            </Link>
          </div>
          <div className="boutique-proof-photo">
            <Image
              src="/images/wigs-by-jolie-boutique-group.jpg"
              alt="People smiling together inside a wig boutique with wigs and hairpieces displayed behind them"
              fill
              sizes="(min-width: 760px) 56vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="inclusive-bar" aria-label="Wig tailoring process">
        <div className="site-shell inclusive-bar-inner">
          <strong>Wig Tailoring Is Personal And All Inclusive</strong>
          <span>Our Entire Process Explained In 5 Steps</span>
        </div>
      </section>

      <section className="section tailored-process-section" aria-labelledby="process-title">
        <div className="site-shell process-steps-large">
          <h2 id="process-title" className="sr-only">Wig consultation process</h2>
          {consultationSteps.map((step, index) => (
            <article key={step.eyebrow} className="process-step-row">
              <div className="process-step-card">
                <span>{step.eyebrow}.</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {index === 0 || index === 3 ? (
                  <div className="process-step-actions">
                    <Link href="/consultation">Book</Link>
                    <a href={business.phoneHref}>Call</a>
                  </div>
                ) : null}
              </div>
              <div className="process-step-image">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 900px) 46vw, 100vw"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about-section" aria-labelledby="about-title">
        <div className="site-shell about-grid">
          <div>
            <p className="eyebrow">About Jolie</p>
            <h2 id="about-title">More than a decade of hair-industry experience.</h2>
            <p>
              Jolie brings more than a decade of hair-industry experience to a
              boutique studio centered on high-end styling, custom fittings,
              color guidance, coverage needs, and personalized care.
            </p>
            <Link className="button button-dark" href="/consultation">
              Book a Visit
            </Link>
          </div>
          <PlaceholderImage id="WBJ-about-jolie" variant="tall" tone="dark" />
        </div>
      </section>

      <section id="reviews" className="section review-proof-section" aria-labelledby="review-proof-title">
        <div className="site-shell review-proof-grid">
          <div className="review-proof-heading">
            <p className="eyebrow">Google reviews</p>
            <h2 id="review-proof-title">Start With the Public Review Profile.</h2>
          </div>
          {googleReviewProof.map((review) => (
            <article className="review-proof-card" key={review.title}>
              <h3>{review.title}</h3>
              <p>{review.body}</p>
              <a href={reviewSummary.href}>Read on Google</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="faq-title">
        <div className="site-shell faq-grid">
          <div>
            <p className="eyebrow">Frequently asked questions</p>
            <h2 id="faq-title">Before you call.</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <section className="section local-section" aria-labelledby="local-title">
        <div className="site-shell local-grid">
          <div className="local-photo">
            <Image
              src="/images/deerfield-beach-pier.jpg"
              alt="Aerial view of the Deerfield Beach shoreline and pier"
              fill
              sizes="(min-width: 760px) 58vw, 100vw"
            />
          </div>
          <div className="local-copy">
            <p className="eyebrow">Deerfield Beach</p>
            <h2 id="local-title">Local, private, easy to reach.</h2>
            <p>
              Wigs by Jolie is listed at The Cove Shopping Plaza in Deerfield Beach,
              close to the coastal rhythm clients already know.
            </p>
            <a className="button button-dark" href={business.directionsHref}>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="section form-section" aria-labelledby="home-form-title">
        <div className="site-shell form-grid">
          <div>
            <p className="eyebrow">Book</p>
            <h2 id="home-form-title">Ask Jolie for a visit.</h2>
            <p>
              Send your name and contact info. Jolie will reply before anything
              is confirmed.
            </p>
          </div>
          <ConsultationForm />
        </div>
      </section>

      <section id="visit" className="section visit-section" aria-labelledby="visit-title">
        <div className="site-shell visit-grid">
          <div>
            <p className="eyebrow">Visit or reach out</p>
            <h2 id="visit-title">Visit Wigs by Jolie.</h2>
            <address>
              {business.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </div>
          <div className="contact-panel">
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
            <a href={business.emailHref}>{business.email}</a>
            <a href={business.directionsHref}>Get Directions</a>
            <Link href="/consultation">Book a Visit</Link>
          </div>
          <div className="map-panel" aria-label="Map to Wigs by Jolie">
            <iframe
              title="Map to Wigs by Jolie in Deerfield Beach"
              src={business.mapsEmbedHref}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href={business.directionsHref}>Open in Google Maps</a>
          </div>
        </div>
      </section>
    </main>
  );
}
