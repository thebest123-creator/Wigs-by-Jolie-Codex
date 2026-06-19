# Build Report - 2026-06-16

## Completed

- Current Wigs by Jolie website used as the primary live business source.
- Competitor audit completed and saved in `research/COMPETITOR-AUDIT-2026-06-16.md`.
- Design direction, design system, page rhythm, and image placeholder plan created.
- Next.js App Router website implemented in `website/`.
- Consultation-focused homepage implemented.
- Dedicated consultation page implemented.
- Privacy and terms note pages implemented.
- Centralized business data, services, FAQs, SEO metadata, LocalBusiness JSON-LD, sitemap, and robots route implemented.
- AI-generated development imagery added for hero, services, About, and gallery sections. Images are not presented as real clients, Jolie, or verified boutique photography.
- Second imagery pass added a mobile-first full-bleed hero portrait plus more varied consultation, topper, care, interior, and caramel styling images.
- Source-bound reviews section added using the public Birdeye rating/count and listed Google review count.
- Color system revised to a cozier premium atelier palette with dark espresso sections, antique-gold CTAs, and warmer parchment surfaces.
- Mobile hero revised to feel more like a luxury atelier banner with image background, overlay text, stats, and stacked CTAs.
- Consultation flow implemented with accessible validation and honest email/call handoff.
- Responsive mobile action bar implemented.
- Browser review completed at 390px mobile, 768px tablet, and 1440px desktop.

## Verification

Commands run from `website/`:

- `npm run lint` - passed
- `npm run typecheck` - passed
- `npm run build` - passed
- `npm run test:e2e` - passed, 3 tests
- `npm audit --audit-level=moderate` - reported 2 moderate issues inherited through Next.js/PostCSS; npm suggests `npm audit fix --force`, but that would install a breaking/downgraded Next version, so it was not applied.

Production build output:

- `/` static
- `/consultation` dynamic
- `/privacy` static
- `/terms` static
- `/robots.txt` static
- `/sitemap.xml` static

## Screenshots

- `screenshots/wbj-home-mobile-390.png`
- `screenshots/wbj-home-tablet-768.png`
- `screenshots/wbj-home-desktop-1440.png`
- `screenshots/tablet-hero-viewport-debug.png`

## Remaining Business Questions

- Confirm current hours.
- Confirm consultation fee or whether any free-consultation language is allowed.
- Confirm preferred booking method and whether the Wix booking flow should remain.
- Confirm form delivery destination and hosting provider.
- Confirm official social URLs.
- Confirm which exact Google review excerpts are approved for on-site display.
- Provide approved logo, brand colors, fonts, and photography.
- Confirm whether existing blog content should migrate, be rewritten, redirected, or left on Wix.

## Remaining Technical Requirements

- Add real form delivery before launch.
- Replace AI-generated development imagery with approved Wigs by Jolie photography before final launch when available.
- Add approved privacy policy and legal terms before public launch.
- Re-run audit after final hosting/domain configuration.
- Re-run npm audit after a stable Next.js release resolves the inherited PostCSS advisory without a breaking downgrade.

## Local Review

Run:

```bash
cd "C:\Users\ASanc\OneDrive\Desktop\Cowork OS\Web Dev\Wigs by Jolie\website"
npm run dev
```

Open:

```text
http://localhost:3000
```
