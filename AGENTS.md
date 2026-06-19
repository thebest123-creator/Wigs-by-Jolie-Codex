# Wigs by Jolie — Codex Instructions

## Project Scope

This folder contains the complete Wigs by Jolie website project.

Keep all project-specific documentation, research, assets, screenshots, prompts, generated files, and website code inside this folder.

Do not modify parent folders, sibling projects, or unrelated files unless explicitly instructed.

Do not move or delete existing files without first checking whether they contain unique information and explaining why the change is necessary.

---

## Required Startup Context

Before beginning substantial work:

1. Read this file.
2. Read `PROJECT.md`.
3. Read `PROJECT-BRIEF.md`.
4. Read `BUILD-BRIEF.md`.
5. Read `OPEN-QUESTIONS.md`.
6. Review any additional documents relevant to the current task.
7. Inspect the existing folder structure and website repository.
8. State any important assumptions, contradictions, missing information, or technical limitations before proceeding.

When conducting competitor research or visual analysis, also review:

* `REFERENCES.md`
* `CONVERSION-STRATEGY.md`
* `BRAND.md`
* `CUSTOMER.md`
* `SERVICES.md`
* `CONTENT.md`
* Relevant files inside `research/`

When working on imagery or page composition, also review:

* `ASSET-NEEDS.md`
* `IMAGE-PLAN.md`, when it exists
* Relevant files inside `assets/`
* Relevant files inside `screenshots/`

Project-specific documentation takes priority over general assumptions.

---

## Primary Objective

Build a premium, mobile-first website that generates qualified private consultation requests for Wigs by Jolie.

The website should help visitors understand that they can receive personalized guidance in selecting a natural-looking, comfortable hair solution suited to their appearance, lifestyle, routine, and goals.

Visitors should not need to know whether they need a wig, topper, extensions, or another solution before requesting a consultation.

### Primary CTA

**Book a Private Consultation**

### Secondary Actions

* Call Jolie
* Get Directions
* Ask a Question

All major consultation CTAs should lead to one consistent consultation experience.

---

## Content Integrity Rules

* Use verified business information only.
* Never invent testimonials, reviews, client names, statistics, credentials, certifications, awards, prices, policies, business hours, guarantees, inventory, results, or transformation claims.
* Do not imply that a consultation is free unless that has been explicitly verified.
* Do not invent appointment length, response time, availability, deposits, cancellation policies, refund policies, financing, insurance acceptance, or medical credentials.
* Do not describe Wigs by Jolie as providing medical treatment.
* Do not publish stock photography as Jolie, the boutique, or actual Wigs by Jolie clients.
* Do not imply that stock models are real customers.
* Do not create fake before-and-after transformations.
* Keep internal notes, TODOs, development warnings, placeholder instructions, and research commentary out of public pages.
* Flag missing or unresolved information in `OPEN-QUESTIONS.md` instead of guessing.
* Disable or omit sections that require unavailable proof rather than publishing fabricated content.
* Preserve the distinction between verified facts, working assumptions, and unresolved questions.

---

## Brand and Design Direction

The website should feel:

* Premium
* Editorial
* Private
* Warm
* Calm
* Reassuring
* Fashion-forward
* Personal
* Trustworthy
* Established
* Boutique rather than mass-market

Prioritize:

* Strong visual hierarchy
* Refined typography
* Generous whitespace
* Editorial composition
* Varied section layouts
* Large, purposeful image areas
* Clear consultation conversion
* Excellent mobile usability
* Accessibility
* Performance
* Local SEO
* Authenticity

Avoid:

* Generic AI-generated landing-page design
* Default Tailwind or component-library appearance
* Repetitive card grids
* Identical section structures
* Every section being centered
* Excessive rounded rectangles
* Excessive beige-on-beige styling
* Low-contrast gold or taupe body text
* Generic icons above every heading
* Technology-startup styling
* Discount-retail styling
* Medical-clinic styling
* Generic beauty-salon templates
* Excessive gradients
* Glassmorphism
* Floating decorative blobs
* Unnecessary carousels
* Decorative animation without conversion value
* Multiple competing primary CTAs

The page should use visual rhythm rather than one repeated template:

* Large sections followed by intimate sections
* Light sections followed by dark sections
* Image-led sections followed by text-led sections
* Dense proof areas followed by open consultation areas
* Emotional storytelling followed by practical reassurance

The same major layout should not be used in consecutive sections.

---

## Competitor Research Rules

When researching premium wig websites:

* Use current live websites rather than memory.
* Record the inspection date.
* Distinguish exact computed measurements from visual estimates.
* Do not present guessed measurements as exact.
* Inspect desktop, tablet, and mobile behavior.
* Analyze typography, spacing, content width, section height, image scale, image ratios, navigation, forms, CTAs, consultation flow, proof, dynamic features, and performance.
* Identify patterns that recur across multiple leading businesses.
* Separate recurring category standards from one-off features.
* Use competitors to understand category expectations, not to copy their design.
* Do not copy competitor text, code, images, branding, layouts, or trade dress.
* Store competitor screenshots only for internal research.
* Do not ship competitor assets in the public website.

A feature should not be adopted merely because one competitor uses it.

---

## Scope Boundaries

Do not add the following unless explicitly approved:

* Ecommerce checkout
* Large product catalogs
* Financing
* Insurance workflows
* Insurance reimbursement claims
* AI wig matching
* Face scanning
* Home trials
* Subscription programs
* Loyalty programs
* Customer accounts
* Virtual consultations
* Medical intake systems
* Live-chat sales widgets
* Automated appointment confirmation without a real calendar integration

Do not introduce major dependencies, platforms, or services without explaining:

1. Why they are necessary
2. What problem they solve
3. Their maintenance cost
4. Their privacy implications
5. Their performance implications

---

## Image and Placeholder Rules

Until final imagery is approved:

* Use intentionally sized image placeholders.
* Preserve the exact planned aspect ratio and responsive behavior.
* Give every placeholder a unique image ID.
* Document its purpose, minimum dimensions, focal point, composition, desktop crop, and mobile crop.
* Do not replace missing images with generic icons.
* Do not allow missing imagery to collapse the intended page composition.
* Do not display verbose image instructions publicly.
* Development labels should be controlled through a development-only flag.
* Avoid layout shift when final images replace placeholders.
* Keep image requirements centralized in `IMAGE-PLAN.md` and the website content configuration when those files exist.

Final imagery may be generated or supplied later, but the website layout must be designed around the intended photographic hierarchy from the beginning.

---

## Development Expectations

When website code exists:

* Inspect the existing technology stack before changing it.
* Preserve working code unless a change is justified.
* Use TypeScript where supported.
* Centralize repeated business information.
* Centralize services, FAQs, consultation options, gallery items, testimonials, social links, SEO metadata, feature flags, and form configuration.
* Keep components maintainable and appropriately scoped.
* Do not over-componentize trivial markup.
* Avoid unnecessary client-side rendering.
* Avoid unnecessary dependencies.
* Keep unverified sections disabled through configuration or feature flags.
* Document unresolved deployment, analytics, image, legal, and form-delivery requirements.
* Do not claim that a form submission was delivered unless a real delivery method confirms it.
* Do not display fake calendar availability.
* Do not collect unnecessary sensitive or medical information.
* Do not send personally identifiable form content to analytics.

After material changes, run:

* Formatting
* Linting
* Type checking
* Automated tests
* Production build

When available, also run:

* Playwright interaction tests
* Responsive screenshot capture
* Accessibility checks
* Performance review

---

## Consultation Experience Requirements

The consultation path should be:

* Easy to understand
* Private and reassuring
* Appropriate for uncertain first-time visitors
* Accessible on mobile
* Consistent across the website
* Honest about what has and has not been confirmed

The consultation experience must:

* Include an “I’m not sure yet” option
* Avoid requiring visitors to understand wig terminology
* Clearly state that a request is not confirmed until Wigs by Jolie responds
* Offer phone contact as an alternative
* Preserve form progress where practical
* Prevent duplicate submissions
* Provide accessible validation and error states
* Avoid unnecessary form fields
* Avoid collecting medical diagnoses or sensitive treatment details

Service-related CTAs should preselect the relevant consultation interest where technically appropriate.

---

## Accessibility Requirements

Target WCAG 2.2 AA where reasonably achievable.

Verify:

* Semantic landmarks
* Logical heading hierarchy
* Keyboard-accessible navigation
* Keyboard-accessible menus, accordions, and galleries
* Visible focus states
* Sufficient contrast
* Accessible form labels
* Accessible error messages
* Screen-reader announcements where needed
* Appropriate button and link semantics
* Large mobile touch targets
* Reduced-motion support
* Descriptive image alt text
* Empty alt text for decorative images
* No horizontal overflow
* No content hidden behind sticky navigation or mobile action bars

---

## Performance Requirements

Prioritize:

* Fast initial loading
* Proper image sizing
* Responsive image delivery
* Stable image dimensions
* Minimal layout shift
* Efficient font loading
* Limited font weights
* Lazy loading below the fold
* Minimal third-party scripts
* Small JavaScript bundles
* Avoidance of unnecessary hydration
* Smooth interaction on mobile devices

Do not sacrifice usability or accessibility for decorative animation.

---

## SEO Requirements

Use verified business information only.

Implement or verify:

* One clear H1 per page
* Logical heading hierarchy
* Unique page titles
* Meta descriptions
* Canonical metadata
* Open Graph metadata
* Sitemap
* Robots configuration
* Descriptive links
* Descriptive image alt text
* Click-to-call links
* Directions links
* LocalBusiness structured data using verified information only
* Proper indexability
* Local relevance for Deerfield Beach and surrounding service areas when supported by actual content

Do not add:

* Fake review schema
* Fake aggregate ratings
* Unverified business hours
* Unverified prices
* Unverified geographic coordinates
* Unsupported service-area claims

---

## Visual Review Requirements

Code generation alone is not sufficient.

After building or materially changing the website:

1. Run the website locally.
2. Review the actual rendered pages.
3. Inspect mobile, tablet, and desktop layouts.
4. Capture screenshots where practical.
5. Review the composition critically.
6. Correct visual and usability problems.
7. Repeat the review after revisions.

Inspect at minimum:

* 390px mobile width
* 768px tablet width
* 1440px desktop width

Also inspect a wider desktop viewport when practical.

Review for:

* Weak typography
* Poor headline wrapping
* Repetitive layouts
* Generic cards
* Weak image hierarchy
* Unbalanced section heights
* Excessive beige-on-beige styling
* Low contrast
* Awkward mobile stacking
* Weak image crops
* Too much copy
* Competing CTAs
* Sticky elements covering content
* Horizontal overflow
* Public placeholder language
* Unsupported claims
* Unnecessary animation
* Generic template appearance

---

## File Management Rules

* Keep planning documents in the project root.
* Keep competitor and source research inside `research/`.
* Keep internal screenshots inside `screenshots/`.
* Keep reusable task prompts inside `prompts/`.
* Keep approved and source assets inside `assets/`.
* Keep the application code inside `website/`.
* Preserve original assets separately from edited or generated assets.
* Use clear filenames.
* Do not create redundant versions of the same instruction file.
* Before deleting duplicate files, compare them and merge any unique content.
* Update documentation when major decisions change.

---

## Definition of Done

Work is not complete merely because code was generated.

Before presenting a task as complete, verify:

* The site runs successfully.
* The production build passes.
* Formatting, linting, type checking, and tests pass.
* The primary consultation path works.
* All major consultation CTAs lead to the intended destination.
* Service selection reaches the appropriate consultation state.
* Phone links work.
* Email links work.
* Directions links work.
* Mobile layouts have no overflow or covered content.
* Sticky elements do not cover content.
* Forms have accessible labels, validation, success, and failure states.
* No fabricated claims appear publicly.
* No competitor content or assets appear publicly.
* Public pages contain no development notes, TODOs, or placeholder warnings.
* Image placeholders preserve the intended composition.
* Unresolved launch requirements are documented.
* The final result has been visually reviewed in the browser at mobile, tablet, and desktop sizes.

At the end of substantial work, report:

1. What was completed
2. Files created or modified
3. Tests performed
4. Build result
5. Screenshots produced
6. Remaining business questions
7. Remaining technical requirements
8. The single highest-priority next action
