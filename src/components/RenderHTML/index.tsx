import React from "react";

type RenderHTMLProps = {
  html: string;
};

export default function RenderHTML({
  html,
}: RenderHTMLProps): JSX.Element | null {
  if (!html) return null;

  return (
    <div
      className="text-white [&_.editor-text-bold]:font-bold [&_a]:underline [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:leading-tight [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:leading-snug [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:leading-snug [&_p.editor-paragraph]:text-xl [&_p.editor-paragraph]:leading-7"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
