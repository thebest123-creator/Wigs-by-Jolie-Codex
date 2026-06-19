# Build Brief

## Build Status

No website code exists in this folder yet. Development should not begin until the planning foundation is reviewed and priority open questions are answered.

## Recommended Technical Structure

Recommended folder layout:

```text
Wigs by Jolie/
  AGENTS.md
  PROJECT.md
  BRAND.md
  CUSTOMER.md
  SERVICES.md
  CONTENT.md
  CONVERSION-STRATEGY.md
  SITE-MAP.md
  REFERENCES.md
  ASSET-NEEDS.md
  OPEN-QUESTIONS.md
  BUILD-BRIEF.md
  assets/
    brand/
    photography/
    inspiration/
    originals/
  research/
  screenshots/
  prompts/
  website/
```

## Recommended Website Stack

Use a modern TypeScript-capable frontend stack in `website/`. The exact stack can be chosen at build time, but a strong default is:

- Vite
- React
- TypeScript
- CSS modules or a small design-system layer

Reasons:

- Fast local development
- Strong component maintainability
- Good static-site deployment options
- Straightforward responsive testing

If SEO content, routing, or hosting requirements point toward another framework later, revisit the decision before implementation.

## Build Sequence

1. Confirm priority open questions in `OPEN-QUESTIONS.md`.
2. Decide how the rebuild should use the current website: replace Wix, supplement Wix, migrate blog content, or launch as a new standalone site.
3. Resolve the booking-flow conflict between the Book Online page and the home page scheduling UI.
4. Add or approve brand and photography assets.
5. Finalize page map and conversion path.
6. Create centralized business-info data based on `PROJECT.md` and the current website audit.
7. Build mobile-first page structure.
8. Add consultation form behavior.
9. Add metadata, local SEO, accessibility, and performance improvements.
10. Test mobile, tablet, and desktop layouts.
11. Verify phone, email, directions, and form paths.
12. Run production build and document deployment requirements.

## Non-Negotiables

- Do not fabricate proof or business details.
- Do not publish internal planning notes.
- Do not use stock images as real clients or real studio photos.
- Do not ship without verifying the primary consultation path.
