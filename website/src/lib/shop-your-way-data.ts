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

function createItem(id: string, label: string, imageAlt: string): ShopYourWayItem {
  return {
    id,
    label,
    imageSrc: `/images/shop-your-way/${id}.webp`,
    suggestedImagePath: `/images/shop-your-way/${id}.webp`,
    imageAlt,
    href: null,
  };
}

export const shopYourWayCategories = [
  {
    id: "length",
    label: "Shop by Length",
    imageShape: "portrait",
    items: [
      createItem("length-short", "Short (Under 16\u201d)", "Studio model wearing a short copper-brown bob hairstyle."),
      createItem("length-mid", "Mid (17\u201d\u201320\u201d)", "Studio model wearing a shoulder-length blonde hairstyle."),
      createItem("length-long", "Long (21\u201d\u201325\u201d)", "Studio model wearing a long highlighted brunette hairstyle."),
      createItem("length-extra-long", "Extra Long (26\u201d+)", "Studio model wearing an extra-long burgundy hairstyle."),
    ],
  },
  {
    id: "color",
    label: "Shop by Color",
    imageShape: "square",
    items: [
      createItem("color-black", "Black", "Close-up texture of black hair."),
      createItem("color-dark-brown", "Dark Brown", "Close-up texture of dark brown hair."),
      createItem("color-medium-brown", "Medium Brown", "Close-up texture of medium brown hair."),
      createItem("color-light-brown", "Light Brown", "Close-up texture of light brown hair."),
      createItem("color-red", "Red", "Close-up texture of deep red hair."),
      createItem("color-blonde", "Blonde", "Close-up texture of blonde hair."),
      createItem("color-grey", "Grey", "Close-up texture of grey hair."),
      createItem("color-salt-and-pepper", "Salt and Pepper", "Close-up texture of salt-and-pepper hair."),
    ],
  },
  {
    id: "hair-type",
    label: "Shop by Hair Type",
    imageShape: "landscape",
    items: [
      createItem("hair-human-hair", "Human Hair", "Ring of human-hair color samples."),
      createItem("hair-processed-european", "Processed European", "Ring of processed European hair samples."),
      createItem("hair-premium-processed", "Premium Processed", "Ring of premium processed hair samples."),
      createItem("hair-virgin-european", "Virgin European", "Ring of virgin European hair samples."),
    ],
  },
] as const satisfies readonly ShopYourWayCategory[];

