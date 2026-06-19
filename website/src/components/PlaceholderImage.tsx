import Image from "next/image";

type PlaceholderImageProps = {
  id: string;
  variant?: "portrait" | "wide" | "square" | "tall" | "panorama";
  tone?: "light" | "dark" | "rose";
  className?: string;
};

const variantClass = {
  portrait: "aspect-[4/5]",
  wide: "aspect-[7/5]",
  square: "aspect-square",
  tall: "aspect-[5/6]",
  panorama: "aspect-[16/10]",
};

const toneClass = {
  light: "placeholder-light",
  dark: "placeholder-dark",
  rose: "placeholder-rose",
};

const imageAssets: Record<
  string,
  {
    src: string;
    alt: string;
    sizes: string;
  }
> = {
  "WBJ-hero-consultation": {
    src: "/images/wigs-by-jolie-showroom-banner.jpg",
    alt: "Wide view of a premium wig showroom with rows of displayed wigs.",
    sizes: "100vw",
  },
  "WBJ-consultation-portrait": {
    src: "/images/hero-atelier-portrait-v2.png",
    alt: "Woman with dark brunette waves in warm atelier light.",
    sizes: "(min-width: 1200px) 520px, (min-width: 760px) 42vw, 100vw",
  },
  "WBJ-studio-detail": {
    src: "/images/consultation-table-v2.png",
    alt: "Hands reviewing hair swatches and topper samples at a private consultation table.",
    sizes: "(min-width: 1200px) 560px, (min-width: 760px) 360px, 100vw",
  },
  "WBJ-services-wigs": {
    src: "/images/service-wigs.png",
    alt: "Long brunette wig styled on a boutique display stand.",
    sizes: "(min-width: 760px) 45vw, 100vw",
  },
  "WBJ-services-toppers": {
    src: "/images/topper-detail-v2.png",
    alt: "Hands holding a brunette hair topper with natural part and lace detail.",
    sizes: "(min-width: 760px) 25vw, 100vw",
  },
  "WBJ-services-extensions": {
    src: "/images/caramel-styling-v2.png",
    alt: "Hands adjusting a caramel blonde wig during a boutique styling session.",
    sizes: "(min-width: 760px) 40vw, 100vw",
  },
  "WBJ-services-care": {
    src: "/images/care-station-v2.png",
    alt: "Cozy wig care station with brush, towel, spray bottle, and brunette wig.",
    sizes: "(min-width: 760px) 40vw, 100vw",
  },
  "WBJ-about-jolie": {
    src: "/images/wigs-by-jolie-counter-team.jpg",
    alt: "Two people smiling at the Wigs by Jolie counter with wigs displayed behind them.",
    sizes: "(min-width: 1200px) 520px, (min-width: 760px) 44vw, 100vw",
  },
  "WBJ-gallery-01": {
    src: "/images/gallery-texture.png",
    alt: "Close-up of brunette hair texture arranged with gold styling details on silk.",
    sizes: "(min-width: 1200px) 430px, (min-width: 760px) 260px, 50vw",
  },
  "WBJ-gallery-02": {
    src: "/images/gallery-consult-table.png",
    alt: "Hair color swatches, measuring tape, and a styled hair piece on a consultation table.",
    sizes: "(min-width: 760px) 22vw, 50vw",
  },
  "WBJ-gallery-03": {
    src: "/images/boutique-interior-v2.png",
    alt: "Cozy private boutique interior with wigs displayed on dark wood shelves.",
    sizes: "(min-width: 760px) 30vw, 100vw",
  },
  "WBJ-gallery-04": {
    src: "/images/gallery-lace-front.png",
    alt: "Close detail of a lace-front wig hairline and natural part.",
    sizes: "(min-width: 760px) 30vw, 100vw",
  },
  "WBJ-gallery-05": {
    src: "/images/gallery-care.png",
    alt: "Wig care station with brush, silk scarf, and hair care bottles.",
    sizes: "(min-width: 760px) 22vw, 50vw",
  },
  "WBJ-gallery-06": {
    src: "/images/gallery-studio.png",
    alt: "Private boutique consultation seating area with a wig displayed nearby.",
    sizes: "(min-width: 1200px) 430px, (min-width: 760px) 260px, 50vw",
  },
};

export function PlaceholderImage({
  id,
  variant = "portrait",
  tone = "light",
  className = "",
}: PlaceholderImageProps) {
  const showDevLabel = process.env.NEXT_PUBLIC_SHOW_IMAGE_IDS === "true";
  const asset = imageAssets[id];

  if (asset) {
    return (
      <div
        data-image-id={id}
        className={`image-placeholder image-photo ${variantClass[variant]} ${className}`}
      >
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          priority={id === "WBJ-hero-consultation"}
          sizes={asset.sizes}
          className="image-placeholder__photo"
        />
        {showDevLabel ? <span>{id}</span> : null}
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      data-image-id={id}
      className={`image-placeholder ${variantClass[variant]} ${toneClass[tone]} ${className}`}
    >
      <div className="image-placeholder__grain" />
      <div className="image-placeholder__line image-placeholder__line--one" />
      <div className="image-placeholder__line image-placeholder__line--two" />
      {showDevLabel ? <span>{id}</span> : null}
    </div>
  );
}
