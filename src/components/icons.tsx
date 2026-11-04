import type { IconName } from "@/content/types";

// Simple outline icons. Swap these paths for your own icon set if preferred.
const paths: Record<IconName, string[]> = {
  scale: [
    "M12 3v18",
    "M5 7h14",
    "M5 7l-3 6a3 3 0 0 0 6 0z",
    "M19 7l-3 6a3 3 0 0 0 6 0z",
  ],
  building: [
    "M4 21V5l8-2 8 2v16",
    "M9 21v-4h6v4",
    "M8 9h2M14 9h2M8 13h2M14 13h2",
  ],
  home: ["M3 11l9-7 9 7", "M5 10v10h14V10"],
  users: [
    "M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1",
    "M10 8a3 3 0 1 0 0 .01",
    "M17 11a3 3 0 1 0 0 .01",
  ],
  document: ["M7 3h7l5 5v13H7z", "M14 3v5h5", "M10 13h6", "M10 17h6"],
  shield: ["M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"],
};

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
