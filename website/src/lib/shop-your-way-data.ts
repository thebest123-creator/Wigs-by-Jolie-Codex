export type ShopYourWayCategoryId = "length" | "color" | "hair-type";

export type ShopYourWayItem = {
  id: string;
  label: string;
  imageSrc: string | null;
  suggestedImagePath: string;
  imageAlt: string;
  href: string | null;
};

export type ShopYourWayCategory = {
  id: ShopYourWayCategoryId;
  label: string;
  imageShape: "portrait" | "square" | "landscape";
  items: readonly ShopYourWayItem[];
};

function createItem(id: string, label: string): ShopYourWayItem {
  return {
    id,
    label,
    imageSrc: null,
    suggestedImagePath: `/images/shop-your-way/${id}.webp`,
    imageAlt: `Planned image for ${label}`,
    href: null,
  };
}

export const shopYourWayCategories = [
  {
    id: "length",
    label: "Shop by Length",
    imageShape: "portrait",
    items: [
      createItem("length-short", "Short (Under 16\u201d)"),
      createItem("length-mid", "Mid (17\u201d\u201320\u201d)"),
      createItem("length-long", "Long (21\u201d\u201325\u201d)"),
      createItem("length-extra-long", "Extra Long (26\u201d+)"),
    ],
  },
  {
    id: "color",
    label: "Shop by Color",
    imageShape: "square",
    items: [
      createItem("color-black", "Black"),
      createItem("color-dark-brown", "Dark Brown"),
      createItem("color-medium-brown", "Medium Brown"),
      createItem("color-light-brown", "Light Brown"),
      createItem("color-red", "Red"),
      createItem("color-blonde", "Blonde"),
      createItem("color-grey", "Grey"),
      createItem("color-salt-and-pepper", "Salt and Pepper"),
    ],
  },
  {
    id: "hair-type",
    label: "Shop by Hair Type",
    imageShape: "landscape",
    items: [
      createItem("hair-processed-european", "Processed European"),
      createItem("hair-premium-processed", "Premium Processed"),
      createItem("hair-virgin-european", "Virgin European"),
    ],
  },
] as const satisfies readonly ShopYourWayCategory[];

