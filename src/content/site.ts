// Site-wide settings: firm identity, navigation, footer, and the entry notice.
// Replace every [BRACKETED] placeholder with real content.

import type { NavItem } from "./types";

const firmName = "Sanjay Aggarwal & Associates";

export const site = {
  firmName,
  tagline: "Headquartered in Delhi. Present across India.",

  // Logo lockup (src/components/Logo.tsx): monogram inside the arch, then a two-line wordmark.
  brand: {
    monogram: "SA",
    primary: "Sanjay Aggarwal",
    secondary: "& Associates",
  },

  // Order here is the order shown in the header.
  navItems: [
    { label: "About", href: "/about" },
    { label: "Practice Areas", dropdown: true },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],

  // Button at the right of the header on large screens, and at the bottom of the mobile menu.
  headerCta: { label: "Contact Us", href: "/contact" },

  contact: {
    address: ["[STREET ADDRESS]", "[CITY, STATE ZIP]"],
    phone: "[PHONE NUMBER]",
    email: "[EMAIL ADDRESS]",
    hours: "9:00 AM – 11:00 PM, Monday – Sunday",
  },

  // Icon buttons in the home hero card. Replace each href when ready, e.g.
  // phone: "tel:+91XXXXXXXXXX", WhatsApp: "https://wa.me/91XXXXXXXXXX", email: "mailto:name@example.com".
  quickContact: [
    { kind: "phone" as const, label: "Call us", href: "#" },
    { kind: "whatsapp" as const, label: "Message us on WhatsApp", href: "#" },
    { kind: "email" as const, label: "Email us", href: "#" },
  ],

  social: [
    { label: "[SOCIAL PLATFORM 1]", href: "#" },
    { label: "[SOCIAL PLATFORM 2]", href: "#" },
    { label: "[SOCIAL PLATFORM 3]", href: "#" },
  ],

  legalLinks: [
    { label: "[DISCLAIMER]", href: "#" },
    { label: "[PRIVACY POLICY]", href: "#" },
    { label: "[TERMS OF USE]", href: "#" },
  ],

  copyright: `© [YEAR] ${firmName}. All rights reserved.`,

  // Shown to every visitor before they enter the site, until they click the button.
  // `remember` controls how long "Proceed" is remembered:
  //   "never"   = shown on every refresh and new visit (clicking links inside the site never re-shows it)
  //   "session" = shown once per browser tab/window session
  //   "forever" = shown once per browser, until site data is cleared
  // DRAFT WORDING: have the firm's counsel review and approve this text against the current
  // Bar Council of India rules before the site goes live.
  entryNotice: {
    title: "Disclaimer",
    intro: `The Bar Council of India prohibits advocates from engaging in any form of advertisement or solicitation. By accessing the ${firmName} website (our website), the user acknowledges that:`,
    points: [
      "The user is voluntarily using our website to gain information about us for their information and use. They also acknowledge that there has been no attempt by us to advertise or solicit work.",
      "Any information obtained or downloaded from our website does not lead to the creation of an attorney-client relationship between the Firm and the user.",
      "The content on this website is for informational purposes only and cannot be construed to be a form of legal opinion or legal advice.",
      `${firmName} will not be held liable for any consequences from actions taken based on the materials or information provided on this website.`,
    ],
    closing: "By clicking the button below, you confirm that you have read and understood this disclaimer.",
    button: "Proceed to Website",
    remember: "never" as "never" | "session" | "forever",
  },
};
