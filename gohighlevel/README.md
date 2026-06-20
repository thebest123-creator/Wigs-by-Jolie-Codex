# Wigs by Jolie Version 2 — GoHighLevel Build Kit

This folder converts the approved Version 2 Next.js homepage into plain HTML, CSS, and small JavaScript snippets that can be assembled inside HighLevel. The section files are intentionally independent so the page can be built and adjusted one section at a time.

## Before You Start

1. Work in a duplicate or unpublished HighLevel page until the complete page has been tested.
2. Upload the supplied project images before pasting the image-led sections.
3. Build the consultation form as a native HighLevel form. Do not paste a disconnected HTML form.
4. The supplied Shop Your Way images are already mapped in the project; upload those exact files to HighLevel rather than substituting new imagery.

## Recommended Page Structure

Add the files in this order:

1. `01-header.html`
2. `02-hero.html`
3. `03-proof-strip.html`
4. `04-boutique.html`
5. `05-shop-your-way.html`
6. `06-process-banner.html`
7. `07-process.html`
8. `08-about.html`
9. `09-reviews.html`
10. `10-faq.html`
11. `11-local.html`
12. `12-consultation-intro.html` plus a native HighLevel Form element
13. `13-visit.html`
14. `14-footer.html`
15. `15-mobile-actions.html`

## HighLevel Installation

### 1. Create or open the homepage

In the Wigs by Jolie sub-account, open **Sites → Websites**, select the website, open the homepage, and choose **Edit**. HighLevel’s current builder uses sections, rows, columns, and elements. Keep each numbered file in its own Custom HTML/JS element so later edits remain manageable.

Official reference: [HighLevel Websites Overview](https://help.gohighlevel.com/support/solutions/articles/155000001633-websites-overview)

### 2. Install the shared code once

- Paste `00-head-code.html` into the site or page **Head Tracking Code** area.
- Paste the complete contents of `00-global-styles.css` into the page’s **Custom CSS** area.
- Paste `00-footer-scripts.js` into **Footer Tracking Code**, wrapped in `<script>` and `</script>` tags.
- Save, then use **Preview Custom Code** or open the page preview. HighLevel’s editor may not execute custom code directly on the canvas.

If Google-hosted fonts are not appropriate for the final privacy configuration, omit `00-head-code.html`; the CSS includes Georgia and Arial fallbacks.

### 3. Upload and connect images

In HighLevel, go to **Settings → Media**, choose **Upload File**, and upload the files listed in the asset map below. Copy the shareable URL for each uploaded image. In every HTML snippet, replace the matching `REPLACE_IMAGE_URL_...` token with that full URL.

Do not publish while any `REPLACE_IMAGE_URL_` token remains.

### 4. Add each page section

For each numbered HTML file:

1. Add a new blank section or row.
2. Add one full-width column unless the form instructions say otherwise.
3. Search **Add Element** for the custom HTML/code element and drag it into the column.
4. Paste the file’s complete contents.
5. Remove HighLevel’s default section/row/column padding so the snippet controls its own spacing.
6. Save and preview before adding the next section.

Save the header and footer as **Global Sections** after they are working. HighLevel documents Global Sections as reusable sections whose later changes update every page using them.

### 5. Build the consultation form natively

Create a two-column HighLevel section near the bottom of the page:

- Left column: Custom HTML element containing `12-consultation-intro.html`.
- Right column: native HighLevel Form element.

From the builder’s Forms & Surveys area, choose **Create New** or **Add Existing**, then drag the form into the right column. Use these fields:

- Name — required
- Phone
- Email
- What would you like help with? — required dropdown
  - I’m not sure yet
  - Wigs and hairpieces
  - Toppers and coverage
  - Extensions and added volume
  - Styling, maintenance, and care
- Preferred contact method — Phone, Email, or Either
- Message — optional; instruct visitors not to include medical diagnoses or sensitive treatment details

Require at least one usable contact method through the form configuration or follow-up workflow. The post-submit message should say: **“Thank you. Your request was received. This is not a confirmed appointment; Wigs by Jolie will contact you.”**

Submit a real test and verify it appears under **Sites → Forms → Submissions** before publishing. HighLevel’s current form documentation specifically recommends this save, preview, test, and submission-check workflow.

Official reference: [Create Forms & Surveys Inside the Site Builder](https://help.gohighlevel.com/support/solutions/articles/155000006719-create-forms-surveys-inside-the-site-builder)

### 6. Configure page settings

- Page path: `/`
- H1: keep only the hero heading as the page H1
- Title: `Wigs by Jolie | Premium Wigs in Deerfield Beach`
- Meta description: `Premium wigs, toppers, extensions, styling, and care with private guidance in Deerfield Beach, Florida.`
- Add the approved favicon only after its asset is confirmed.
- Keep image optimization enabled.
- Do not enable an unplanned chat widget.

### 7. Test before publishing

Use Preview and check at minimum:

- 390px mobile, 768px tablet, and 1440px desktop
- no horizontal overflow
- Shop Your Way tabs work with click, Left/Right Arrow, Home, and End
- FAQ controls open with keyboard and touch
- every Book link reaches `#consultation`
- phone, email, directions, Google review, and map links work
- the mobile action bar does not cover the form or footer
- form validation, submission, CRM record, notification, and thank-you message work
- no image replacement token or internal instruction appears publicly

Use **Save** for an unpublished version. Use **Publish** only after the tests above pass; HighLevel distinguishes the saved draft from the live published version.

## Asset Map

| Token | Local source file |
|---|---|
| `wigs-by-jolie-mobile-banner.png` | `website/public/images/wigs-by-jolie-mobile-banner.png` |
| `wigs-by-jolie-showroom-banner.jpg` | `website/public/images/wigs-by-jolie-showroom-banner.jpg` |
| `wigs-by-jolie-boutique-group.jpg` | `website/public/images/wigs-by-jolie-boutique-group.jpg` |
| `step-01-consultation.png` | `website/public/images/steps/step-01-consultation.png` |
| `step-02-options.png` | `website/public/images/steps/step-02-options.png` |
| `step-03-fit-finish.png` | `website/public/images/steps/step-03-fit-finish.png` |
| `step-04-follow-up.png` | `website/public/images/steps/step-04-follow-up.png` |
| `step-05-confident.png` | `website/public/images/steps/step-05-confident.png` |
| `wigs-by-jolie-counter-team.jpg` | `website/public/images/wigs-by-jolie-counter-team.jpg` |
| `deerfield-beach-pier.jpg` | `website/public/images/deerfield-beach-pier.jpg` |

Shop Your Way uses optimized WebP deployment copies of the supplied category image set in `website/public/images/shop-your-way/`. Upload all 16 WebP files to HighLevel Media and replace the matching `REPLACE_IMAGE_URL_...` tokens in `05-shop-your-way.html`. The untouched supplied PNG originals remain in `assets/originals/shop-your-way/`.

## Known Launch Dependencies

- The preferred live form-delivery workflow and notification inbox still need confirmation.
- Business hours, consultation fee, and appointment-only status remain unverified.
- Privacy and Terms pages need final approved legal content and correct HighLevel paths.
- Review counts and relative review dates should be refreshed immediately before publication.
- The finished HighLevel page still requires responsive, accessibility, and live submission testing.
