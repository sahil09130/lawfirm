import { site } from "@/content/site";

// Floating WhatsApp button, fixed to the bottom-right corner so it stays visible while scrolling.
// The link comes from `quickContact` (kind "whatsapp") in src/content/site.ts.
// The glyph is an original drawing in WhatsApp's colours. To use WhatsApp's official brand asset,
// download it from WhatsApp's brand resources and replace the <svg> below.
export default function WhatsAppButton() {
  const item = site.quickContact.find((link) => link.kind === "whatsapp");
  if (!item) return null;

  return (
    <a
      href={item.href}
      aria-label={item.label}
      className="group fixed bottom-5 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-6px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8 sm:h-[4.5rem] sm:w-[4.5rem]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 motion-safe:animate-ping [animation-duration:2.8s]"
      />
      <svg viewBox="0 0 32 32" aria-hidden="true" className="relative h-9 w-9 sm:h-10 sm:w-10" fill="none">
        <path
          d="M16 4.5A11.5 11.5 0 0 0 6 21.8L4.5 27.5l5.9-1.5A11.5 11.5 0 1 0 16 4.5z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinejoin="round"
        />
        <path
          fill="currentColor"
          d="M12.3 10.3c-.3-.6-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.4 3.6 1.5 3.8c.2.3 2.6 4.1 6.4 5.6 3.2 1.2 3.8 1 4.5.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5l-2.4-1.1c-.3-.1-.6-.2-.8.2-.3.4-.9 1.1-1.1 1.3-.2.2-.4.3-.8.1-.4-.2-1.5-.6-2.9-1.8-1.1-1-1.8-2.2-2-2.5-.2-.4 0-.6.2-.8l.6-.7c.2-.2.2-.4.4-.6.1-.3.1-.5 0-.7l-1.1-2.5z"
        />
      </svg>
    </a>
  );
}
