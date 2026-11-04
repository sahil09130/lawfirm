// Leadership profiles. Shown on /about and in the home page leadership section.

import type { Leader } from "./types";

export const leadership: Leader[] = [
  {
    id: "leader-1",
    name: "[LEADER 1 NAME]",
    title: "[LEADER 1 TITLE, e.g. Managing Partner]",
    photo: { src: "/placeholders/portrait.svg", alt: "Photo of [LEADER 1 NAME]" },
    shortBio: "[LEADER 1 SHORT BIO: one sentence for the card.]",
    bio: [
      "[LEADER 1 FULL BIO PARAGRAPH 1.]",
      "[LEADER 1 FULL BIO PARAGRAPH 2.]",
    ],
  },
  {
    id: "leader-2",
    name: "[LEADER 2 NAME]",
    title: "[LEADER 2 TITLE]",
    photo: { src: "/placeholders/portrait.svg", alt: "Photo of [LEADER 2 NAME]" },
    shortBio: "[LEADER 2 SHORT BIO.]",
    bio: [
      "[LEADER 2 FULL BIO PARAGRAPH 1.]",
      "[LEADER 2 FULL BIO PARAGRAPH 2.]",
    ],
  },
  {
    id: "leader-3",
    name: "[LEADER 3 NAME]",
    title: "[LEADER 3 TITLE]",
    photo: { src: "/placeholders/portrait.svg", alt: "Photo of [LEADER 3 NAME]" },
    shortBio: "[LEADER 3 SHORT BIO.]",
    bio: [
      "[LEADER 3 FULL BIO PARAGRAPH 1.]",
      "[LEADER 3 FULL BIO PARAGRAPH 2.]",
    ],
  },
];
