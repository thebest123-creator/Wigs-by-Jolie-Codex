# Wigs by Jolie — GoHighLevel Beginner Build Guide

This package recreates the approved homepage as separate Custom HTML sections in HighLevel. The current build intentionally omits `05-shop-your-way.html`.

Keep the Wix website live while you build this version on an unpublished HighLevel page. Do not connect the client’s domain until the design, links, form submission, mobile layout, and client approval are complete.

## What Goes Where

| File | Paste location |
|---|---|
| `00-head-code.html` | Page or site Head Tracking Code |
| `00-global-styles.css` | Page Settings → Custom CSS |
| `00-footer-scripts.js` | Footer Tracking Code, between `<script>` and `</script>` |
| Numbered `.html` files | One Custom HTML/JS element per section |

The exact menu names can vary slightly by HighLevel account or builder version. If the editor uses “Custom Code,” “HTML,” or “Custom JS/HTML,” use the element that accepts HTML markup.

## Step 1 — Create a Safe Test Page

1. Open the Wigs by Jolie HighLevel sub-account.
2. Go to **Sites → Websites**.
3. Create a new website or duplicate an unpublished page.
4. Name it `Wigs by Jolie - Client Preview`.
5. Do not attach the Wix domain yet.
6. Open the page editor.

## Step 2 — Install the Shared Code Once

1. Open the page settings or tracking-code settings.
2. Copy all of `00-head-code.html` into **Head Tracking Code**.
3. Copy all of `00-global-styles.css` into **Custom CSS**. Do not put the CSS inside a Custom HTML section.
4. Open **Footer Tracking Code**.
5. Enter `<script>`, paste all of `00-footer-scripts.js`, and then enter `</script>`.
6. Save the page.

HighLevel may not fully render custom code on the editing canvas. Use the page’s Preview mode after saving.

## Step 3 — Upload the Ten Required Images

Open HighLevel’s Media area and upload these exact files from `website/public/images/`:

1. `wigs-by-jolie-showroom-banner.jpg`
2. `wigs-by-jolie-mobile-banner.png`
3. `wigs-by-jolie-boutique-group.jpg`
4. `steps/step-01-consultation.png`
5. `steps/step-02-options.png`
6. `steps/step-03-fit-finish.png`
7. `steps/step-04-follow-up.png`
8. `steps/step-05-confident.png`
9. `wigs-by-jolie-counter-team.jpg`
10. `deerfield-beach-pier.jpg`

Copy the public HighLevel URL for each uploaded image. In the section files, replace the complete matching token beginning with `REPLACE_IMAGE_URL_` with that URL. Do not remove the quotation marks around the URL.

Example:

```html
src="REPLACE_IMAGE_URL_deerfield-beach-pier.jpg"
```

becomes:

```html
src="https://your-highlevel-media-url.example/deerfield-beach-pier.jpg"
```

The image tokens are intentionally not live links. Images will appear broken until these replacements are made.

## Step 4 — Add the Sections in This Exact Order

For every section below:

1. Add a blank full-width section.
2. Add one row and one full-width column.
3. Set the HighLevel section, row, and column padding to `0`.
4. Drag in one Custom HTML/JS element.
5. Paste the complete contents of the listed file.
6. Save.
7. Preview before adding the next section.

Active order:

1. `01-header.html`
2. `02-hero.html`
3. `03-proof-strip.html`
4. `04-boutique.html`
5. `06-process-banner.html`
6. `07-process.html`
7. `08-about.html`
8. `09-reviews.html`
9. `10-faq.html`
10. `11-local.html`
11. Consultation section described below
12. `13-visit.html`
13. `14-footer.html`
14. `15-mobile-actions.html`

Do not add `05-shop-your-way.html` for this version.

## Step 5 — Build the Consultation Section Natively

Use a native HighLevel form so submissions create contacts and can trigger workflows.

1. Add a normal HighLevel section. Leave the builder's optional HTML ID field blank because the included code already supplies `consultation`.
2. Add a two-column row.
3. In the left column, add a Custom HTML/JS element and paste `12-consultation-intro.html`.
4. In the right column, add a native HighLevel Form element.
5. Create or select a form containing:
   - Name — required
   - Phone
   - Email
   - What would you like help with? — required dropdown
   - Preferred contact method
   - Message — optional
6. Dropdown choices:
   - I’m not sure yet
   - Wigs and hairpieces
   - Toppers and coverage
   - Extensions and added volume
   - Styling, maintenance, and care
7. Require at least one usable contact method through the form or workflow configuration.
8. Use this success message: **Thank you. Your request was received. This is not a confirmed appointment; Wigs by Jolie will contact you.**
9. Do not ask for diagnoses, treatment information, or other sensitive medical details.

## Step 6 — Understand the Links

- `#top`, `#services`, `#process`, `#reviews`, `#consultation`, and `#visit` are same-page anchors. They work only after all matching sections are present on the same HighLevel page.
- `tel:+19549755874` opens the device’s phone application. It normally does not place a call from a desktop browser.
- `mailto:wigsbyjolie@gmail.com` opens the visitor’s configured email application.
- The Google Maps and individual Google review links were checked and currently return successfully.
- The footer intentionally omits Privacy and Terms links until real HighLevel pages and approved legal content exist. Do not add dead `/privacy` or `/terms` links.

## Step 7 — Page Settings

- Page path: use a temporary preview path until approval.
- Page title: `Wigs by Jolie | Premium Wigs in Deerfield Beach`
- Meta description: `Premium wigs, toppers, extensions, styling, and care with private guidance in Deerfield Beach, Florida.`
- Keep only the hero’s “Elegance defined by artistry.” as the page H1.
- Do not add a calendar, live chat, or automated appointment-confirmation claim yet.

## Step 8 — Test Before Showing the Client

1. Search the page code for `REPLACE_IMAGE_URL_`. The result must be zero.
2. Preview at approximately 390px, 768px, and 1440px widths.
3. Click every header and footer navigation link.
4. Click every Book button and confirm it scrolls to the consultation form.
5. Test the phone link on a phone.
6. Test email, Google Maps, Google review, and embedded map links.
7. Open and close every FAQ with keyboard and touch.
8. Submit the form with test contact information.
9. Verify the submission appears under HighLevel form submissions and creates or updates the correct contact.
10. Verify the notification or workflow reaches the intended inbox before promising delivery to the client.
11. Confirm the mobile action bar does not cover the form or footer.
12. Refresh the Google review count and relative dates immediately before publication.

Run the local structural audit at any time with:

```powershell
node gohighlevel/audit-links.mjs
```

## Still Required Before a Domain Switch

- Client approval
- Confirmed form notification inbox and workflow
- Approved Privacy and Terms pages
- Final review approval and refreshed dates/count
- Confirmed domain and DNS migration plan
- Live mobile, accessibility, and submission testing

The Wix site should remain the production website until every item above is complete.
