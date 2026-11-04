// Shared content types. Edit the data files next to this one; components read from them.

export type IconName =
  | "scale"
  | "building"
  | "home"
  | "users"
  | "document"
  | "shield";

export type ImageContent = {
  src: string;
  alt: string;
};

export type PracticeArea = {
  slug: string;
  name: string;
  icon: IconName;
  summary: string;
  overview: string[];
  sections: { heading: string; body: string }[];
};

export type Leader = {
  id: string;
  name: string;
  title: string;
  photo: ImageContent;
  shortBio: string;
  bio: string[];
};

export type Insight = {
  slug: string;
  // Slug of the related practice area (see practice-areas.ts).
  practiceArea: string;
  title: string;
  excerpt: string;
  // ISO date (YYYY-MM-DD). Used for sorting and display.
  date: string;
  author: string;
  // Optional real cover photograph. When omitted, an illustration for the practice area is shown.
  image?: ImageContent;
  // One string per block: "text" = paragraph, "## text" = heading, "- text" = bullet.
  body: string[];
};

export type NavItem =
  | { label: string; href: string; dropdown?: never }
  | { label: string; href?: never; dropdown: true };

// Landmark line-art available for the presence carousel (see src/components/Landmarks.tsx).
export type LandmarkName =
  | "india-gate"
  | "jaali"
  | "vidhana-soudha"
  | "gopuram"
  | "charminar"
  | "howrah-bridge"
  | "gateway-of-india"
  | "shaniwar-wada"
  | "statue-of-unity"
  | "hawa-mahal";

export type PlaceCard = {
  name: string;
  // Illustration shown on the card.
  landmark: LandmarkName;
  // Optional real photograph. When set, it replaces the illustration.
  image?: ImageContent;
};
