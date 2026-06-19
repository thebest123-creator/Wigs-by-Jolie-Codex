# Design System

## Tokens

Colors:

- Ink: `#100c09`
- Espresso: `#1f1712`
- Night: `#0e0b09`
- Cocoa: `#3c2b23`
- Rosewood: `#714235`
- Gilded: `#d4aa62`
- Deep Gilded: `#9f6c28`
- Ivory: `#fbf6ed`
- Soft Linen: `#e9dfd1`
- Shell: `#fffaf2`
- Champagne: `#f1e8dc`
- Warm White: `#fff9ef`
- Mist: `#cbb79c`

Typography:

- Display: Cormorant Garamond, serif
- Body: Inter, sans-serif

Type scale:

- Hero: clamp from 3.4rem to 7.25rem
- H2: clamp from 2.2rem to 4.8rem
- H3: clamp from 1.35rem to 2rem
- Body: 1rem to 1.08rem
- Small: 0.82rem to 0.9rem

Spacing:

- Section vertical mobile: 72px
- Section vertical desktop: 112px to 152px
- Content width: 1180px max
- Narrow reading width: 680px
- Form width: 760px

Radius:

- Buttons: 2px for tailored editorial CTAs
- Cards/tools: 8px
- Images: 8px or square crop depending on section

## Component Rules

- Primary button: antique-gold fill with dark text, supported by dark espresso surrounding sections where appropriate.
- Secondary button: underlined text or bordered button; do not create competing primary CTAs.
- Service selectors: segmented button-like controls with visible selected state.
- FAQ: accessible disclosure buttons with text plus/minus indicators.
- Form: two-step flow, explicit labels, inline validation, live status region.
- Mobile action bar: two actions only, consultation and call.

## Placeholder Image System

Image placeholders should use CSS-rendered editorial blocks with texture, aspect ratio, focal labels hidden from public users by default, and unique IDs in code and `IMAGE-PLAN.md`.

AI-generated development imagery is still used in parts of the main image hierarchy. User-supplied boutique photography has been added for proof and about sections and should be preferred where it improves authenticity without forcing awkward crops.
