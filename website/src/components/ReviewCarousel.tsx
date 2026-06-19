import { googleReviewHighlights, reviewSummary } from "@/lib/site-data";

export function ReviewCarousel() {
  return (
    <section id="reviews" className="section reviews-section" aria-labelledby="reviews-title">
      <div className="site-shell reviews-grid">
        <div className="reviews-copy">
          <p className="eyebrow">Reviews</p>
          <h2 id="reviews-title">Read the reviews.</h2>
          <p>
            Start with Google reviews for Wigs by Jolie, then book or call when
            you are ready to ask about your own fit, coverage, and style.
          </p>
          <a className="button button-dark" href={reviewSummary.href}>
            View Google Reviews
          </a>
        </div>
        <div className="review-carousel" aria-label="Google review highlights">
          {googleReviewHighlights.map((review) => (
            <article className="review-card" key={review.title}>
              <p className="review-eyebrow">{review.eyebrow}</p>
              <h3>{review.title}</h3>
              <p>{review.body}</p>
              <a href={reviewSummary.href}>Read on {reviewSummary.source}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
