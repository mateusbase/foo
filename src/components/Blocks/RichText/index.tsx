import React from "react";
import clsx from "clsx";
import { RichTextProps } from "./types";

export function RichText({ content, className }: RichTextProps): JSX.Element {
  const contentWithIds = content
    .replace(/<h1([^>]*)>(.*?)<\/h1>/g, (_, attrs, innerHTML) => {
      const cleanText = innerHTML.replace(/<[^>]+>/g, "").trim();

      const slug = cleanText
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      return `<h1 id="${slug}"${attrs}>${innerHTML}</h1>`;
    })
    .replace(
      /<h1([^>]*)style=["'][^"']*text-align:\s*center;?[^"']*["']/g,
      (match, attrs) => {
        const hasClass = /class=/.test(match);

        if (hasClass) {
          return match.replace(/class=["']([^"']*)["']/, (_, cls) => {
            return `class="${cls} text-center"`;
          });
        }

        return `<h1${attrs} class="text-center"`;
      },
    );

  return (
    <div
      className={clsx(
        "[&_.editor-text-bold]:font-bold",
        "[&_a]:underline",
        "[&_h1]:text-4xl [&_h1]:leading-tight [&_h1]:text-primary",
        "[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:leading-snug",
        "[&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:leading-snug",
        "[&_p]:text-[20px] [&_p]:text-lightGray",
        "[&_ul]:ml-6 [&_ul]:list-disc [&_ul]:text-lightGray",
        "[&_li]:mb-1 [&_li]:text-[20px]",
        className,
      )}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: contentWithIds }}
    />
  );
}
