import type { ReactNode } from "react";

type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] };

// Turns the article `body` strings into blocks: "## " = heading, "- " = bullet, otherwise paragraph.
function toBlocks(body: string[]): Block[] {
  const blocks: Block[] = [];
  for (const line of body) {
    if (line.startsWith("## ")) {
      blocks.push({ type: "h", text: line.slice(3) });
    } else if (line.startsWith("- ")) {
      const last = blocks[blocks.length - 1];
      if (last?.type === "ul") last.items.push(line.slice(2));
      else blocks.push({ type: "ul", items: [line.slice(2)] });
    } else {
      blocks.push({ type: "p", text: line });
    }
  }
  return blocks;
}

export default function ArticleBody({ body }: { body: string[] }) {
  const blocks = toBlocks(body);
  const firstParagraphIndex = blocks.findIndex((block) => block.type === "p");

  return (
    <div className="space-y-6 text-lg leading-[1.85] text-ink">
      {blocks.map((block, i): ReactNode => {
        if (block.type === "h") {
          return (
            <h2 key={i} className="!mt-14 text-3xl leading-tight md:text-4xl">
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="space-y-3 pl-1">
              {block.items.map((item) => (
                <li key={item} className="flex gap-4">
                  <span aria-hidden="true" className="mt-[0.85em] h-px w-4 shrink-0 bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        const isLead = i === firstParagraphIndex;
        return (
          <p
            key={i}
            className={
              isLead
                ? "text-xl leading-[1.8] first-letter:float-left first-letter:mr-3 first-letter:font-heading first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-accent"
                : undefined
            }
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
