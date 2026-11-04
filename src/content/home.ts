// Home page copy. Section order is defined in src/app/page.tsx.

import type { PlaceCard } from "./types";

export const home = {
  hero: {
    eyebrow: "Sanjay Aggarwal & Associates",
    headline: "With You In",
    // Second line of the headline, set in italic brass. Leave empty ("") to hide it.
    headlineEmphasis: "Every Challenge",
    // Shown in the vertical side label on wide screens.
    location: "New Delhi NCR · Mumbai · Bangalore · Gujarat · Rajasthan",
    // AI-generated reception image with the firm name. Replace with a photo of the real office when available.
    image: { src: "/images/hero-reception.jpg", alt: "Reception area of Sanjay Aggarwal & Associates with a marble desk, the firm name on a wood-panelled wall, leather seating and the Indian flag" },
    intro:
      "At Sanjay Aggarwal & Associates, we believe in empowering you through dedicated, personalized legal services tailored to your unique needs.",
    cta: { label: "Contact Us", href: "/contact" },
    // Small panel beside the headline on large screens. Phone, email, and hours come from site.ts.
    panelLabel: "Speak With Us",
  },

  // Scrolling card carousel between the practice areas and leadership sections.
  practiceStates: {
    eyebrow: "[PRESENCE EYEBROW]",
    heading: "Headquartered in Delhi. Present across India.",
    intro:
      "With our headquarters in Delhi, we appear before courts and tribunals in major cities and states across the country. Clients benefit from local presence backed by one coordinated team.",
    label: "Cities and states where we practise",
    // Small tag on the first card (the headquarters). Set to "" to remove it.
    headquartersLabel: "Headquarters",
    // Delhi stays first: it is the headquarters, and the carousel rests on it before scrolling.
    // Each card shows a landmark illustration. To use a real photo instead, add
    // image: { src: "/places/delhi.jpg", alt: "India Gate, New Delhi" } to the card.
    items: [
      { name: "Delhi (National Capital Region)", landmark: "india-gate" },
      { name: "Ahmedabad", landmark: "jaali" },
      { name: "Bengaluru", landmark: "vidhana-soudha" },
      { name: "Chennai", landmark: "gopuram" },
      { name: "Hyderabad", landmark: "charminar" },
      { name: "Kolkata", landmark: "howrah-bridge" },
      { name: "Mumbai", landmark: "gateway-of-india" },
      { name: "Pune", landmark: "shaniwar-wada" },
      { name: "Gujarat", landmark: "statue-of-unity" },
      { name: "Rajasthan", landmark: "hawa-mahal" },
    ] satisfies PlaceCard[],
  },

  // "Firm at a glance" section: welcome text on the left, three round stat badges on the right.
  // Counters animate when scrolled into view. Replace the numbers with confirmed figures.
  glance: {
    eyebrow: "About the firm",
    heading: "Welcome to Sanjay Aggarwal & Associates",
    intro:
      "Sanjay Aggarwal & Associates is a full-service law firm headquartered in Delhi, advising and representing clients across India. Our partners and associates act in arbitration, commercial, constitutional, criminal, regulatory and tax matters with a focus on clear advice and diligent advocacy.",
    linkLabel: "Read more",
    linkHref: "/about",
    // Text that circles slowly around the ring above the badges.
    ringText: "20+ Years of Excellence",
  },
  stats: [
    { value: 20, suffix: "+", label: "Years of experience" },
    { value: 4, suffix: "+", label: "Partners" },
    { value: 10, suffix: "+", label: "Affiliate partners" },
  ],

  highlights: {
    eyebrow: "Our Expertise",
    heading: "Complete legal solutions for every stage of a dispute.",
    intro: "Whether you need an advocate in court, a faster route outside it, or guidance on running a compliant business, our team works as one to protect your interests.",
    items: [
      {
        title: "Advocacy in Courts and Tribunals",
        description: "Skilled representation in commercial, constitutional, criminal and regulatory matters, from first filing through appeal.",
        href: "/practice-areas/commercial-litigation",
      },
      {
        title: "Resolution Beyond the Courtroom",
        description: "Arbitration and mediation that settle disputes faster, more privately and with greater control over the outcome.",
        href: "/practice-areas/arbitration",
      },
      {
        title: "Corporate, Securities and Tax Advisory",
        description: "Practical counsel on company, insolvency, securities, competition and tax law, so your business stays compliant and protected.",
        href: "/practice-areas/corporate-and-insolvency-laws",
      },
    ],
  },

  practiceAreas: {
    eyebrow: "Practice Areas",
    heading: "Focused advocacy across the areas that matter most.",
    intro:
      "From arbitration and commercial disputes to constitutional, criminal and tax matters, we act for clients before courts, tribunals and regulators. Each matter is handled with careful preparation and clear advice at every stage.",
  },

  leadership: {
    eyebrow: "[LEADERSHIP EYEBROW]",
    heading: "[LEADERSHIP HEADING]",
    intro: "[LEADERSHIP INTRO.]",
  },

  insights: {
    eyebrow: "Insights",
    heading: "Legal knowledge, explained clearly.",
    intro: "Our latest guides help you understand Indian law, your rights and your options before you need to act.",
  },

  cta: {
    eyebrow: "Get in touch",
    heading: "Contact us",
    body: "Tell us about your matter and our team will get back to you promptly. Every conversation is treated with care and confidence.",
    label: "Contact",
    href: "/contact",
  },
};
