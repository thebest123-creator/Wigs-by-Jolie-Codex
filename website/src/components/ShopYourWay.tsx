"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import {
  shopYourWayCategories,
  type ShopYourWayCategoryId,
  type ShopYourWayItem,
} from "@/lib/shop-your-way-data";

function ShopImage({
  item,
  imageShape,
}: {
  item: ShopYourWayItem;
  imageShape: "portrait" | "square" | "landscape";
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(item.imageSrc) && !imageFailed;

  return (
    <div className={`shop-way-image shop-way-image-${imageShape}`}>
      {showImage && item.imageSrc ? (
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1100px) 270px, (min-width: 760px) 44vw, 100vw"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div
          className="shop-way-placeholder"
          role="img"
          aria-label={`${item.imageAlt}. Placeholder image ID: ${item.id}.`}
        >
          <span>Image placeholder</span>
          <strong>{item.id}</strong>
        </div>
      )}
    </div>
  );
}

export function ShopYourWay() {
  const [activeId, setActiveId] = useState<ShopYourWayCategoryId>("length");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeCategory =
    shopYourWayCategories.find((category) => category.id === activeId) ??
    shopYourWayCategories[0];

  function selectTab(index: number) {
    const category = shopYourWayCategories[index];
    if (!category) return;
    setActiveId(category.id);
    tabRefs.current[index]?.focus();
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % shopYourWayCategories.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + shopYourWayCategories.length) % shopYourWayCategories.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = shopYourWayCategories.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      selectTab(nextIndex);
    }
  }

  return (
    <section
      id="shop-your-way"
      className="section shop-way-section"
      aria-labelledby="shop-way-title"
    >
      <div className="site-shell">
        <div className="shop-way-heading">
          <p className="eyebrow">Find your direction</p>
          <h2 id="shop-way-title">Shop Your Way</h2>
        </div>

        <div className="shop-way-tabs" role="tablist" aria-label="Shop your way">
          {shopYourWayCategories.map((category, index) => {
            const isActive = category.id === activeId;
            return (
              <button
                key={category.id}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                id={`shop-way-tab-${category.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`shop-way-panel-${category.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(category.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div
          key={activeCategory.id}
          id={`shop-way-panel-${activeCategory.id}`}
          className={`shop-way-grid shop-way-grid-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`shop-way-tab-${activeCategory.id}`}
        >
          {activeCategory.items.map((item) => (
            <article className="shop-way-card" key={item.id} data-image-id={item.id}>
              <ShopImage item={item} imageShape={activeCategory.imageShape} />
              <h3>{item.label}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
