import Link from "next/link";
import { business, navItems } from "@/lib/site-data";

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <div className="site-shell header-inner">
        <Link href="/" className="brand-mark" aria-label="Wigs by Jolie home">
          <span>Wigs by Jolie</span>
          <small>{business.category}</small>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={`${item.label}-${item.href}`} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="text-link" href={business.phoneHref}>
            Call
          </a>
          <Link className="button button-dark button-small" href="/consultation">
            Book
          </Link>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/consultation">Book</Link>
            <a href={business.phoneHref}>Call Jolie</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
