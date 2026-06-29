import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const sectionFiles = [
  "01-header.html",
  "02-hero.html",
  "03-proof-strip.html",
  "04-boutique.html",
  "06-process-banner.html",
  "07-process.html",
  "08-about.html",
  "09-reviews.html",
  "10-faq.html",
  "11-local.html",
  "12-consultation-intro.html",
  "13-visit.html",
  "14-footer.html",
  "15-mobile-actions.html",
];

const sources = sectionFiles.map((file) => ({
  file,
  html: fs.readFileSync(path.join(root, file), "utf8"),
}));
const combined = sources.map(({ html }) => html).join("\n");
const ids = new Set([...combined.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]));
const failures = [];
const setupItems = [];

for (const { file, html } of sources) {
  for (const match of html.matchAll(/\bhref=["']([^"']+)["']/g)) {
    const href = match[1];
    if (href.startsWith("#") && !ids.has(href.slice(1))) {
      failures.push(`${file}: missing anchor target ${href}`);
    }
    if (/^\/(privacy|terms)\/?$/i.test(href)) {
      failures.push(`${file}: unresolved legal-page link ${href}`);
    }
  }

  for (const match of html.matchAll(/REPLACE_IMAGE_URL_[^"'\s>]+/g)) {
    setupItems.push(`${file}: ${match[0]}`);
  }
}

if (combined.includes('id="shop-your-way"')) {
  failures.push("The omitted Shop Your Way section is present in the active build list.");
}

console.log(`Checked ${sectionFiles.length} active HighLevel section files.`);
console.log(`Found ${ids.size} unique anchor targets.`);

if (failures.length) {
  console.error("\nFAILURES");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log("All same-page navigation anchors resolve.");
  console.log("No unfinished Privacy or Terms links are published in the footer.");
  console.log("The Shop Your Way section is excluded from the active build.");
}

console.log(`\nIMAGE URLS TO REPLACE BEFORE PREVIEWING (${setupItems.length})`);
setupItems.forEach((item) => console.log(`- ${item}`));
