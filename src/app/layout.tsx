import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import EntryNotice from "@/components/EntryNotice";
import WhatsAppButton from "@/components/WhatsAppButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { practiceAreas } from "@/content/practice-areas";
import { site } from "@/content/site";

// Display serif for headings, clean sans for body text.
// Swap these for other next/font families to change the site's typography.
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const text = Inter({
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `[SITE TITLE] | ${site.firmName}`,
    template: `%s | ${site.firmName}`,
  },
  description: "[SITE DESCRIPTION: one to two sentences summarizing the firm for search results.]",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const areaLinks = practiceAreas.map(({ slug, name }) => ({ slug, name }));

  return (
    <html lang="en" className={`${display.variable} ${text.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-white focus:px-4 focus:py-2 focus:text-primary focus:shadow-lg"
        >
          Skip to main content
        </a>
        <EntryNotice
          title={site.entryNotice.title}
          intro={site.entryNotice.intro}
          points={site.entryNotice.points}
          closing={site.entryNotice.closing}
          buttonLabel={site.entryNotice.button}
          remember={site.entryNotice.remember}
        />
        <Header practiceAreas={areaLinks} />
        <div id="main" className="flex flex-1 flex-col">
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
