import Link from "next/link";
import { business } from "@/lib/site-data";

export function MobileActionBar() {
  return (
    <div className="mobile-action-bar" aria-label="Quick actions">
      <Link href="/consultation">Book</Link>
      <a href={business.phoneHref}>Call Jolie</a>
    </div>
  );
}
