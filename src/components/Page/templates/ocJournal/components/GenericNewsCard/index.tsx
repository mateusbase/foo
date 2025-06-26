import { LuArrowUpRight } from "react-icons/lu";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { RichText } from "@/components/Blocks/RichText";
import { Button } from "../../../../../Button";
import { formatDate, getMonthAndYear } from "../../../events/utils";
import { Article } from "../../../news/types";

type Variant = "oc-journal" | "news" | "molecular-thursdays";

type GenericNewsCardProps = {
  options: {
    title: string;
    date: string;
    description?: string;
    image?: {
      url: string;
      alt: string;
      width?: number;
      height?: number;
    };
    id?: string;
    relatedArticles?: Article[];
    author?: string;
    shortDescription?: string;
    category?:
      | {
          name: string;
          icon: {
            alt: string;
            width: number;
            key: string;
            url: string;
            height: number;
          };
          path: string;
        }
      | string;
    content?: string;
    path?: string;
  };
  variant?: Variant;
  showCategoryButton?: boolean;
  categoryLabel?: string;
  showFooter?: boolean;
};

export default function GenericNewsCard({
  options,
  variant,
  showCategoryButton = false,
  categoryLabel = "Artigos",
  showFooter = true,
}: GenericNewsCardProps): JSX.Element {
  const router = useRouter();
  const isJournal = variant === "oc-journal";
  const isNews = variant === "news";
  const isMolecularThursdays = variant === "molecular-thursdays";

  const { title, date, description, image, author, path, content } = options;

  return (
    <div
      className={clsx(
        "mx-auto mb-20 flex w-full cursor-pointer flex-col gap-4 lg:flex-row lg:gap-8",
        {
          "size-full md:min-h-[325px] lg:min-h-[649px]": isJournal,
          "lg:h-full": isNews,
          "h-[438px] lg:h-[501px]": isMolecularThursdays,
        },
      )}
      onClick={() => {
        (isMolecularThursdays || isNews) && path && router.push(path);
      }}
    >
      <div className="h-[430px] w-full lg:h-[501px] lg:max-w-[735px]">
        <Image
          src={image?.url ?? ""}
          alt={image?.alt ?? ""}
          width={image?.width}
          height={image?.height}
          className="size-full object-cover"
        />
      </div>

      <div
        className={clsx("flex w-full flex-1 flex-col justify-start", {
          "min-h-[278px] lg:h-auto lg:justify-center": isMolecularThursdays,
        })}
      >
        {showCategoryButton && (
          <Button
            className="max-h-9 w-fit text-sm"
            variant="outlined"
            color="secondary"
          >
            <LuArrowUpRight />
            {categoryLabel}
          </Button>
        )}

        <h2 className="mt-4 text-left text-xl font-light text-darkGray lg:mt-8 lg:text-4xl xl:text-5xl">
          {title}
        </h2>

        <span className="mt-4 text-left text-sm font-normal text-primary lg:text-base">
          {author
            ? `${getMonthAndYear(date)} - Por: ${author}`
            : formatDate(date)}
        </span>

        {content ? (
          <RichText
            className="mt-6 line-clamp-4 text-left text-sm font-medium text-darkGray lg:mt-14 lg:text-lg xl:text-xl"
            content={content}
          />
        ) : (
          <p className="mt-6 line-clamp-4 text-left text-sm font-medium text-darkGray lg:mt-14 lg:text-lg xl:text-xl">
            {description}
          </p>
        )}

        {showFooter && (
          <div className="mt-4 md:mt-auto lg:mb-16 lg:mt-10">
            <p className="mb-4 text-sm font-medium text-darkGray md:mb-2 lg:mb-10 lg:text-xl">
              Acesse o artigo completo deste estudo
            </p>

            <Button
              onClick={() => router.push(path || "")}
              className="mt-2 w-full lg:mt-4 lg:w-40"
            >
              Saiba mais
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
