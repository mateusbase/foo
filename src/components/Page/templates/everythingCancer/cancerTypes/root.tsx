import PageLayout from "@/components/PageLayout";
import { RichText } from "@/components/Blocks/RichText";
import BaseSwiper from "@/components/BaseSwiper";
import BaseInput from "@/components/Input";
import { SearchIcon } from "@/components/Icons";
import { useState } from "react";
import { CancerTypesProps } from "./types";
import IconCard from "../components/IconCard";
import MenuSelector from "./components/MenuSelector";
import { generateCancerCategoryOptions } from "./util";

export function CancerTypesRoot({
  data,
  breadcrumbs,
}: CancerTypesProps): JSX.Element {
  const { header, introduction, commonCancers, cancers, cancerTypes } = data;
  const [activeRegion, setActiveRegion] = useState<string>("Todos");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const commonCancerTypes = cancers.filter((cancer) => cancer.isCommon);
  const commonCancersData = commonCancerTypes.map((cancer) => ({
    id: Number(cancer.id),
    name: cancer.name,
    description: cancer.shortDescription,
    icon: cancer.icon,
  }));

  const categoryOptions = generateCancerCategoryOptions(cancers);

  const normalize = (text: string): string =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const filteredCancers = cancers.filter((cancer) => {
    const matchesRegion =
      activeRegion === "Todos" ||
      cancer.categories.some(
        (cat) => normalize(cat.name) === normalize(activeRegion),
      );

    const search = normalize(searchTerm);

    const matchesSearch =
      !search ||
      normalize(cancer.name).includes(search) ||
      normalize(cancer.shortDescription || "").includes(search);

    return matchesRegion && matchesSearch;
  });

  return (
    <main>
      <PageLayout
        title={header.title}
        subtitle={header.description}
        breadcrumbs={breadcrumbs}
      >
        <div className="mt-10 flex flex-col gap-6 lg:mt-0">
          <h1 className="text-2xl font-bold text-primary md:text-3xl lg:text-title-lg">
            {introduction.title}
          </h1>

          <RichText
            content={introduction.description}
            className="text-xl text-darkGray md:text-2xl"
          />
        </div>

        <div className="mt-10 flex flex-col items-center lg:mt-14">
          <h1 className="text-3xl font-light text-primary lg:text-6xl">
            {commonCancers.title}
          </h1>

          <div className="my-10 hidden grid-cols-3 gap-7 lg:grid">
            {commonCancersData?.map((cancer) => (
              <IconCard
                key={cancer.id}
                cardTitle={cancer.name}
                cardDescription={cancer.description}
                cardIcon={cancer.icon}
                variant="inline"
              />
            ))}
          </div>

          <div className="relative mt-10 block w-full lg:hidden">
            <BaseSwiper
              data={commonCancersData}
              renderItem={(cancer) => (
                <IconCard
                  key={cancer.id}
                  cardTitle={cancer.name}
                  cardDescription={cancer.description}
                  cardIcon={cancer.icon}
                  variant="inline"
                />
              )}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <h1 className="text-3xl font-light text-primary lg:text-6xl">
            {cancerTypes.title}
          </h1>

          <span className="mt-10 text-center text-2xl text-darkGray lg:w-4/6">
            {cancerTypes.description}
          </span>

          <div className="flex w-full self-start md:w-[416px]">
            <BaseInput
              placeholder="Busque pelo termo"
              endContent={<SearchIcon />}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              className="my-10 text-primary placeholder:text-primary"
            />
          </div>

          <MenuSelector
            options={categoryOptions}
            onClick={(id) => setActiveRegion(id)}
          />

          <div className="mb-40 mt-10 grid w-full grid-cols-1 gap-x-6 gap-y-1 md:mb-28 md:grid-cols-2 lg:mb-10 lg:grid-cols-3">
            {filteredCancers.map((cancer) => (
              <span
                key={cancer.id}
                className="ml-6 text-xl text-darkGray lg:ml-5"
              >
                {cancer.name}
              </span>
            ))}
          </div>
        </div>
      </PageLayout>
    </main>
  );
}
