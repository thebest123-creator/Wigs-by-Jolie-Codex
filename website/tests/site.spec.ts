import { expect, test } from "@playwright/test";

const screenshotRoot = "../screenshots";

async function waitForHydration(page: import("@playwright/test").Page) {
  await page.waitForFunction(() => (window as Window & { __WBJ_HYDRATED?: boolean }).__WBJ_HYDRATED);
}

async function loadLazyImages(page: import("@playwright/test").Page) {
  const images = page.locator("img[alt]");
  await images.evaluateAll((nodes) => {
    nodes.forEach((node) => {
      const img = node as HTMLImageElement;
      img.loading = "eager";
    });
  });

  const viewportHeight = page.viewportSize()?.height ?? 1000;
  const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y <= scrollHeight; y += Math.max(500, Math.floor(viewportHeight * 0.8))) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(80);
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  const unloaded = await images.evaluateAll((nodes) =>
    nodes
      .map((node) => node as HTMLImageElement)
      .filter((image) => !image.complete || image.naturalWidth === 0)
      .map((image) => ({ alt: image.alt, src: image.currentSrc || image.src })),
  );
  const failed = [];
  for (const image of unloaded) {
    const response = await page.request.get(image.src);
    if (!response.ok()) failed.push({ ...image, status: response.status() });
  }
  expect(failed).toEqual([]);
}

test.describe("Wigs by Jolie website", () => {
  test("renders verified public information and primary paths", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await waitForHydration(page);

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /elegance defined by artistry/i,
      }),
    ).toBeVisible();

    await expect(page.getByRole("link", { name: /^Google Review profile$/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /^Open Google Review profile$/i })).toBeVisible();
    await expect(page.getByText("Call Jolie directly", { exact: true })).toBeVisible();
    await expect(page.getByText(/tailored to you/i)).toBeVisible();
    await expect(page.getByText(/policy questions/i)).toBeVisible();
    await expect(page.getByText(/human hair and synthetic options/i)).toBeVisible();
    await expect(page.getByText(/hairpieces, men's pieces, extensions, and toppers/i)).toBeVisible();
    await expect(page.getByRole("img", { name: /premium wig showroom/i })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /deerfield beach wig help, tailored around you/i }),
    ).toBeVisible();
    await expect(page.getByText(/wig tailoring is personal and all inclusive/i)).toBeVisible();
    await expect(page.getByText(/our entire process explained in 5 steps/i)).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /start with a private consultation/i }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: /explore options selected for you/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /perfect the fit and finish/i })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /ask about follow-up support/i }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: /leave confident and prepared/i })).toBeVisible();
    await expect(
      page.getByRole("img", { name: /private wig consultation in a boutique setting/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", { name: /people smiling together inside a wig boutique/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", { name: /two people smiling at the Wigs by Jolie counter/i }),
    ).toBeVisible();
    await expect(page.getByRole("region", { name: /wig consultation process/i })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /see what your neighbors are saying about us/i }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Heidi Feser" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Anne Marie Spiliotis" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Jacqueline Kaufman" })).toBeVisible();
    await expect(page.getByText(/She makes everyone feel beautiful/)).toBeVisible();
    await expect(page.getByText(/She charged me \$10 and I could not be happier/)).toBeVisible();
    await expect(page.getByText(/You get what you pay for in this world/)).toBeVisible();
    await expect(page.locator(".review-proof-section").getByLabel("5 out of 5 stars")).toHaveCount(3);
    await expect(page.getByRole("link", { name: /read on google/i })).toHaveCount(3);
    await expect(page.getByRole("img", { name: /deerfield beach shoreline and pier/i })).toBeVisible();

    const visit = page.getByLabel("Visit Wigs by Jolie");
    await expect(visit.getByText("1562 SE 3rd Ct.")).toBeVisible();
    await expect(visit.getByRole("link", { name: "(954) 975-5874" })).toHaveAttribute(
      "href",
      "tel:+19549755874",
    );
    await expect(visit.getByRole("link", { name: "wigsbyjolie@gmail.com" })).toHaveAttribute(
      "href",
      "mailto:wigsbyjolie@gmail.com",
    );
    await expect(visit.getByRole("link", { name: /get directions/i })).toHaveAttribute(
      "href",
      /google\.com\/maps/,
    );
    await expect(
      visit.locator('iframe[title="Map to Wigs by Jolie in Deerfield Beach"]'),
    ).toBeVisible();
    await expect(visit.getByRole("link", { name: /open in google maps/i })).toHaveAttribute(
      "href",
      /google\.com\/maps/,
    );

    const formBeforeVisit = await page.evaluate(() => {
      const form = document.querySelector(".form-section");
      const visitSection = document.querySelector(".visit-section");
      if (!form || !visitSection) return false;
      return form.getBoundingClientRect().top < visitSection.getBoundingClientRect().top;
    });
    expect(formBeforeVisit).toBe(true);

    await page.getByRole("link", { name: "Book" }).first().click();
    await expect(page).toHaveURL(/\/consultation/);
  });

  test("validates and prepares consultation request honestly", async ({ page }) => {
    await page.goto("/consultation?interest=wigs", { waitUntil: "domcontentloaded" });
    await waitForHydration(page);

    await page.getByRole("button", { name: /email my request/i }).click();
    await expect(page.getByText("Enter your name.")).toBeVisible();
    await expect(page.getByText("Enter a phone number or email so Jolie can respond.")).toBeVisible();

    await page.getByLabel("Name").fill("Website Reviewer");
    await page.getByLabel("Phone").fill("9545550100");
    await page.getByLabel("Email").fill("reviewer@example.com");
    await page.getByLabel("Preferred Date").fill("2026-06-17");
    await page.locator(".time-slot").filter({ hasText: "11:30 AM" }).click();
    await page.getByLabel("Message").fill("I want help choosing a natural-looking option.");
    await page.getByRole("button", { name: /email my request/i }).click();

    await expect(page.getByLabel("11:30 AM")).toBeChecked();
    const slotHeights = await page.locator(".time-slot span").evaluateAll((slots) =>
      slots.map((slot) => Math.round(slot.getBoundingClientRect().height)),
    );
    expect(new Set(slotHeights).size).toBe(1);
    await expect(page.getByText("Your request details are ready.")).toBeVisible();
    await expect(page.getByRole("link", { name: /open email draft/i })).toHaveAttribute(
      "href",
      /mailto:wigsbyjolie@gmail\.com/,
    );
    await expect(page.getByText(/not a confirmed appointment/i)).toBeVisible();
  });

  test("captures responsive screenshots without horizontal overflow", async ({ page }) => {
    test.setTimeout(300000);
    const viewports = [
      { name: "mobile-390", width: 390, height: 1100 },
      { name: "tablet-768", width: 768, height: 1200 },
      { name: "desktop-1440", width: 1440, height: 1100 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await waitForHydration(page);
      await loadLazyImages(page);
      await page.screenshot({
        path: `${screenshotRoot}/wbj-home-${viewport.name}.png`,
        fullPage: true,
      });

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(1);
    }
  });
});
