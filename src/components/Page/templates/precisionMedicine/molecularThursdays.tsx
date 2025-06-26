import PageLayout from "@/components/PageLayout";
import GradientBanner from "@/components/Blocks/GradientBanner";
import BaseInput from "@/components/Input";
import { Button } from "@/components/Button";
import { useSortingFilter } from "@/hooks/useSortingFilter";
import { sortingFilterOptions } from "@/utils/sortingOptions";
import SortingFilterDropdown from "@/components/SortingFilterDropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import BaseSelect from "@/components/Select";
import { useState } from "react";
import apiClient from "@/services/apiClient";
import Image from "next/image";
import { MolecularThursdaysRootProps } from "./types";
import { extractCategories, filterArticlesByCategory } from "./utils";
import GenericNewsCard from "../ocJournal/components/GenericNewsCard";

export function MolecularThursdaysRoot({
  data,
  breadcrumbs,
}: MolecularThursdaysRootProps): JSX.Element {
  const { mainBanner, cta, articles } = data;

  const { handleChange } = useSortingFilter(sortingFilterOptions[0].value);

  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const [loading, setLoading] = useState(false);

  const categories = extractCategories(articles);

  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredArticles = filterArticlesByCategory(articles, selectedCategory);

  const handleSubmit = async (): Promise<void> => {
    setError("");

    setSuccess("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("E-mail inválido.");

      return;
    }

    setLoading(true);

    try {
      await apiClient.post("/api/pages/action", {
        kind: "PRECISION_MEDICINE",
        action: "MOLECULAR_THURSDAYS_SUBSCRIBE",
        payload: { email: email.trim() },
      });

      setEmail("");

      setSuccess("Mensagem enviada com sucesso!");
    } catch {
      setError("Erro ao enviar. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout title={data.header.title} breadcrumbs={breadcrumbs}>
      <GradientBanner title={mainBanner.title} media={mainBanner.media} />

      <div className="mt-10 flex flex-col items-center justify-center gap-10 rounded-2xl bg-purpleMedium px-4 py-5 md:px-14 lg:h-56 lg:flex-row">
        <div className="flex flex-col gap-6 text-white lg:w-4/6">
          <h4 className="text-center text-3xl font-bold lg:text-left">
            {cta.title}
          </h4>

          <span className="text-center text-xl lg:text-left">
            {cta.description}
          </span>
        </div>

        <div className="mb-9 flex w-full flex-col gap-2 md:mb-[52px] lg:my-auto lg:w-2/6">
          <BaseInput
            placeholder={cta.placeholder}
            className="rounded-3xl bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          {success && <p className="text-sm text-green-500">{success}</p>}

          <Button
            className="bg-white text-purpleMedium"
            onClick={handleSubmit}
            loading={loading}
          >
            {cta.buttonText}
          </Button>
        </div>
      </div>

      <div className="mt-6 flex justify-center lg:hidden">
        <BaseSelect
          size="lg"
          onChange={setSelectedCategory}
          defaultValue="Todos"
          startContent={<RxHamburgerMenu size={20} className="text-primary" />}
          options={categories.map((category) => ({
            label: category.name,
            value: category.name,
          }))}
        />
      </div>

      <div className="hidden lg:flex lg:flex-col">
        <div className="mt-6 hidden h-20 w-full items-center justify-between border-b border-darkGray font-bold lg:flex">
          <div className="flex gap-10">
            {categories.map((category) => (
              <div
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex cursor-pointer items-center justify-center gap-3 transition-colors ${
                  selectedCategory === category.name
                    ? "text-primary"
                    : "text-darkGray hover:text-primary"
                }`}
              >
                {category.icon && (
                  <Image
                    width={category.icon.width}
                    height={category.icon.height}
                    src={category.icon.url}
                    alt={category.icon.alt}
                    className="size-3"
                  />
                )}
                <span>{category.name}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center">
            <SortingFilterDropdown
              options={sortingFilterOptions}
              defaultSelectedKey={sortingFilterOptions[0].value}
              onChange={handleChange}
              className="text-drakGray"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:mb-16 md:grid-cols-2 lg:grid-cols-1 lg:gap-0">
        {filteredArticles.length > 0 &&
          filteredArticles.map((article) => (
            <div key={article.id}>
              <GenericNewsCard
                options={{
                  title: article.title,
                  date: article.date,
                  description: article.shortDescription,
                  author: article.author,
                  image: article.coverImage,
                  path: article.path,
                }}
                showCategoryButton
                categoryLabel={article.category.name}
                showFooter={false}
                variant="molecular-thursdays"
              />
            </div>
          ))}
      </div>
    </PageLayout>
  );
}
