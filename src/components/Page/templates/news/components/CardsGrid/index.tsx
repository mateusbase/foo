import { IoIosArrowDropright } from "react-icons/io";
import Image from "next/image";
import { RichText } from "@/components/Blocks/RichText";
import { Button } from "@/components/Button";
import { CardsGridProps } from "./types";

export function CardsGrid({
  displayArticles,
  categories,
  onSelectCategory,
}: CardsGridProps): JSX.Element {
  return (
    <section className="mb-10">
      {displayArticles.map((item, index) => {
        const isEven = index % 2 === 0;

        const contentOrderClass = isEven
          ? "flex-col md:flex-row"
          : "flex-col md:flex-row-reverse";

        const getBgColorClass = (mapIndex: number): string => {
          if (mapIndex === 0) return "bg-custom-gradient-dark-145deg";
          if (mapIndex === 1) return "bg-custom-gradient-purple-145deg";
          return "bg-darkGray";
        };

        const isRounded = index === displayArticles.length - 1;

        const bgColorClass = getBgColorClass(index);

        const category = categories.find(
          (mappedCategory) => mappedCategory.id === item.article.category,
        );

        return (
          <div
            key={item.image.key || index}
            className={`flex flex-col md:h-[223px] lg:h-[536px] ${contentOrderClass}`}
          >
            <div
              className={`flex h-full flex-col items-start justify-center ${bgColorClass} p-8 md:w-1/2 md:pl-[30px] md:pt-6 lg:pl-14 lg:pr-28 ${isRounded ? "lg:rounded-bl-[100px]" : ""}`}
            >
              {category && (
                <Button
                  variant="outlined"
                  onClick={() => onSelectCategory(category.id ?? "")}
                  className="border-2 border-white px-4 py-2 text-left font-normal leading-10 text-white md:text-sm lg:mt-8 lg:h-[71px] lg:w-[297px] lg:text-2xl"
                >
                  <Image
                    src={category.icon.url}
                    alt={category.icon.alt}
                    width={category.icon.width}
                    height={category.icon.height}
                    className="mr-2"
                  />
                  {category.name}
                </Button>
              )}

              <h1 className="mt-6 text-left text-3xl leading-[60px] text-white md:text-2xl md:font-normal lg:text-6xl">
                {item.title}
              </h1>

              <RichText
                content={item?.description}
                className="mt-1 max-w-[625px] text-left font-bold text-white md:text-sm md:font-bold lg:text-2xl"
              />

              <div className="mt-4 hidden lg:flex">
                <IoIosArrowDropright size={30} color="white" />
              </div>
            </div>

            <div className="h-56 md:h-full md:w-1/2">
              <Image
                src={item?.image.url}
                alt={item?.image.alt}
                width={item?.image.width}
                height={item?.image.height}
                className="size-full object-cover"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
