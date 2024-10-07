import Link from "next/link"; // Importando Link do Next.js
import { GlossaryCardProps } from "./types";

export default function GlossaryCard({
  letter,
  terms,
}: GlossaryCardProps): JSX.Element {
  return (
    <div className="flex w-full flex-col rounded-2xl border-1 border-lightGray p-10">
      <h1 className="text-5xl text-primary">{letter}</h1>

      <div className="mt-10">
        {terms.map((term) => (
          <div key={term} className="mt-1 text-xl">
            <Link href={`/glossary/${term.toLowerCase()}`}>
              <span className="cursor-pointer text-primary transition-colors duration-300 hover:text-primary-foreground">
                {term}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
