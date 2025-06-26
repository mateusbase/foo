import Image from "next/image";
import { BodyIcon } from "@/components/Icons";
import { MenuOption } from "./components/MenuSelector/types";
import { Cancer } from "./types";

export function generateCancerCategoryOptions(cancers: Cancer[]): MenuOption[] {
  const categoryMap = new Map<string, MenuOption>();

  cancers.forEach((cancer) => {
    cancer.categories.forEach((category) => {
      if (!categoryMap.has(category.name)) {
        categoryMap.set(category.name, {
          id: category.name,
          label: category.name,
          icon: (
            <Image
              src={category.image.url}
              alt={category.image.alt}
              width={category.image.width}
              height={category.image.height}
            />
          ) as unknown as JSX.Element,
        });
      }
    });
  });

  const allCategory = categoryMap.get("Todos");
  if (allCategory) {
    categoryMap.delete("Todos");
  }

  return [
    allCategory || {
      id: "all",
      label: "Todos",
      icon: <BodyIcon />,
    },
    ...Array.from(categoryMap.values()),
  ];
}
