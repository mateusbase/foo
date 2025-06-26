import slugify from "slugify";
import type { RichTextBlock } from "@/components/Blocks/RichText/types";

export type MenuItem = {
  id: string;
  name: string;
  slug: string;
};

export function extractMenuItems(blocks?: RichTextBlock[]): MenuItem[] {
  const items: MenuItem[] = [];

  let idCounter = 1;

  blocks?.forEach((block) => {
    const html = block.data?.content;

    if (typeof html === "string") {
      const regex = /<h1[^>]*>(.*?)<\/h1>/g;

      let match = regex.exec(html);

      while (match !== null) {
        const rawText = match[1].replace(/<[^>]+>/g, "").trim();

        const slug = slugify(rawText, { lower: true, strict: true });

        if (rawText) {
          items.push({ id: `${idCounter}`, name: rawText, slug });

          idCounter += 1;
        }

        match = regex.exec(html);
      }
    }
  });

  return items;
}
