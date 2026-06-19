import Link from "next/link";
import { business, navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <p className="eyebrow">Boutique studio</p>
          <h2>Wigs by Jolie</h2>
          <p>{business.tagline}</p>
        </div>
        <address>
          {business.addressLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <a href={business.phoneHref}>{business.phoneDisplay}</a>
          <a href={business.emailHref}>{business.email}</a>
        </address>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={`${item.label}-${item.href}`} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
