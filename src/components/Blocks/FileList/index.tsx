import React from "react";
import Image from "next/image";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { FileListProps } from "./types";

const columnClassMap: Record<string, string> = {
  "1": "md:grid-cols-1",
  "2": "md:grid-cols-2",
  "3": "md:grid-cols-3",
  "4": "md:grid-cols-4",
  "5": "md:grid-cols-5",
  "6": "md:grid-cols-6",
};

export default function FileListBlock({
  title,
  columns = "3",
  files,
}: FileListProps): JSX.Element {
  const columnClass = columnClassMap[columns] || "grid-cols-3";

  return (
    <div className="flex flex-col gap-8 p-4">
      {title && (
        <h1 className="mb-11 text-center text-2xl text-primary md:text-left md:text-title-lg lg:mb-2">
          {title}
        </h1>
      )}

      <div className={`grid gap-4 ${columnClass}`}>
        {files.map((file) => (
          <a
            key={file.file.key}
            href={file.file.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2 rounded-[20px] border border-lightGray py-[19.5px] pl-5 pr-3 transition hover:bg-gray-50"
          >
            <Image
              src={
                file.icon?.url || "/assets/images/transparencia/image 60.svg"
              }
              alt={file.icon?.alt || "Ícone de arquivo"}
              width={file.icon?.width || 88}
              height={file.icon?.height || 88}
            />

            <div className="flex flex-1 flex-col gap-4 text-sm text-darkGray lg:text-xs xl:text-xl">
              <span className="font-bold">{file.name}</span>

              <span>{file.description}</span>
            </div>

            <IoChevronForwardCircleOutline
              className="ml-21 shrink-0 text-primary md:ml-10 lg:ml-2 xl:ml-10"
              size={28.5}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
