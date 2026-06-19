import { faqs } from "@/lib/site-data";

export function FaqAccordion() {
  return (
    <div className="faq-list">
      {faqs.map((faq) => (
        <details key={faq.question} className="faq-item">
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
