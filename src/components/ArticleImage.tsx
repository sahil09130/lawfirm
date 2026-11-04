import Image from "next/image";
import type { Insight } from "@/content/types";

// Cover image for an article. If the article has an `image` (a real photograph), that is used.
// Otherwise an original line illustration is drawn for the article's practice area, so every
// article has a cover without relying on third-party photos.
const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const FAINT = { fill: "currentColor", fillOpacity: 0.12, stroke: "currentColor", strokeWidth: 1.6, strokeLinejoin: "round" } as const;

function Illustration({ area }: { area: string }) {
  switch (area) {
    case "arbitration": // round table with three seats and papers
      return (
        <g>
          <ellipse cx="200" cy="130" rx="86" ry="30" {...FAINT} />
          <path d="M200 160v34M168 196h64" {...S} />
          <circle cx="110" cy="96" r="14" {...S} />
          <circle cx="290" cy="96" r="14" {...S} />
          <circle cx="200" cy="198" r="0" {...S} />
          <path d="M92 122c0-12 8-18 18-18s18 6 18 18M272 122c0-12 8-18 18-18s18 6 18 18" {...S} />
          <path d="M175 118h50M180 128h40" {...S} />
          <path d="M200 40v40M170 52h60M170 52l-12 26h24zM230 52l-12 26h24z" {...S} />
        </g>
      );
    case "commercial-litigation": // building, contract and coins
      return (
        <g>
          <path d="M90 190V90l60-30 60 30v100M60 190h180" {...S} />
          <path d="M115 120h20M165 120h20M115 150h20M165 150h20M140 190v-24h20v24" {...S} />
          <rect x="245" y="90" width="70" height="92" {...FAINT} />
          <path d="M258 112h44M258 128h44M258 144h30" {...S} />
          <ellipse cx="338" cy="186" rx="22" ry="7" {...FAINT} />
          <ellipse cx="338" cy="174" rx="22" ry="7" {...FAINT} />
          <ellipse cx="338" cy="162" rx="22" ry="7" {...FAINT} />
        </g>
      );
    case "competition-law": // market bars with magnifier
      return (
        <g>
          <path d="M70 195h260" {...S} />
          <rect x="90" y="140" width="34" height="55" {...FAINT} />
          <rect x="140" y="110" width="34" height="85" {...FAINT} />
          <rect x="190" y="150" width="34" height="45" {...FAINT} />
          <rect x="240" y="80" width="34" height="115" {...FAINT} />
          <circle cx="300" cy="90" r="30" {...S} />
          <path d="M322 112l32 32" {...S} strokeWidth={4} />
          <path d="M286 90h28M300 76v28" {...S} />
        </g>
      );
    case "corporate-and-insolvency-laws": // tower with a rising and falling trend
      return (
        <g>
          <rect x="100" y="70" width="80" height="125" {...FAINT} />
          <rect x="180" y="110" width="60" height="85" {...FAINT} />
          <path d="M116 92h12M140 92h12M116 118h12M140 118h12M116 144h12M140 144h12M196 130h12M214 130h12M196 156h12M214 156h12" {...S} />
          <path d="M60 195h280" {...S} />
          <path d="M255 150l30-26 24 18 36-44" {...S} />
          <path d="M335 98h14v14" {...S} />
        </g>
      );
    case "constitutional-law": // court columns and open book
      return (
        <g>
          <path d="M120 80l80-34 80 34zM132 90h136" {...S} />
          <path d="M146 96v70M180 96v70M214 96v70M248 96v70M128 166h144M116 178h168" {...S} />
          <path d="M120 206c26-12 52-12 80 0 28-12 54-12 80 0v-22c-26-12-52-12-80 0-28-12-54-12-80 0z" {...FAINT} />
          <path d="M200 184v22" {...S} />
        </g>
      );
    case "criminal-law": // gavel and block
      return (
        <g>
          <rect x="120" y="68" width="110" height="46" rx="6" transform="rotate(-28 175 91)" {...FAINT} />
          <path d="M214 120l78 62" {...S} strokeWidth={5} />
          <path d="M110 200h180M130 200v-14h140v14" {...S} />
          <path d="M92 150l-18-8M100 128l-20-14M118 110l-14-16" {...S} />
        </g>
      );
    case "regulatory-litigation": // document under review, stamp
      return (
        <g>
          <rect x="110" y="48" width="140" height="168" {...FAINT} />
          <path d="M132 80h96M132 100h96M132 120h70" {...S} />
          <circle cx="226" cy="172" r="22" {...S} />
          <path d="M214 172l9 9 15-17" {...S} />
          <circle cx="292" cy="108" r="30" {...S} />
          <path d="M314 130l30 30" {...S} strokeWidth={4} />
        </g>
      );
    case "mediation": // two overlapping circles and speech marks
      return (
        <g>
          <circle cx="165" cy="125" r="62" {...FAINT} />
          <circle cx="235" cy="125" r="62" {...FAINT} />
          <path d="M200 76c14 14 14 84 0 98-14-14-14-84 0-98z" {...S} />
          <path d="M96 60h44v26l-12-8h-32zM264 168h44v26l-12-8h-32z" {...S} />
        </g>
      );
    case "securities-law": // candlestick chart
      return (
        <g>
          <path d="M70 200h270M70 200V60" {...S} />
          <path d="M110 90v90M150 70v100M190 110v80M230 80v90M270 60v80M310 90v70" {...S} />
          <rect x="100" y="110" width="20" height="46" {...FAINT} />
          <rect x="140" y="90" width="20" height="50" {...FAINT} />
          <rect x="180" y="130" width="20" height="40" {...FAINT} />
          <rect x="220" y="100" width="20" height="46" {...FAINT} />
          <rect x="260" y="78" width="20" height="40" {...FAINT} />
          <rect x="300" y="104" width="20" height="36" {...FAINT} />
        </g>
      );
    default: // tax: calculator and percent
      return (
        <g>
          <rect x="120" y="44" width="110" height="160" rx="8" {...FAINT} />
          <rect x="136" y="60" width="78" height="30" {...S} />
          <path d="M142 112h14M171 112h14M200 112h14M142 140h14M171 140h14M200 140h14M142 168h14M171 168h14M200 168h14" {...S} strokeWidth={3} />
          <circle cx="288" cy="92" r="9" {...S} />
          <circle cx="330" cy="150" r="9" {...S} />
          <path d="M334 80l-52 82" {...S} />
        </g>
      );
  }
}

export default function ArticleImage({
  article,
  area,
  className = "",
  priority = false,
}: {
  article: Insight;
  // Practice area slug used to choose the illustration.
  area: string;
  className?: string;
  priority?: boolean;
}) {
  if (article.image) {
    return (
      <div className={`relative overflow-hidden bg-primary-strong ${className}`}>
        <Image src={article.image.src} alt={article.image.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" priority={priority} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Illustration for ${article.title}`}
      className={`relative overflow-hidden bg-gradient-to-br from-primary-strong via-primary to-primary-strong text-accent-light ${className}`}
    >
      <div aria-hidden="true" className="bg-columns absolute inset-0 opacity-60" />
      <svg viewBox="0 0 400 240" aria-hidden="true" className="relative h-full w-full" preserveAspectRatio="xMidYMid slice">
        <Illustration area={area} />
      </svg>
    </div>
  );
}
