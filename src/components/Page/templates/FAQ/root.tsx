import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import { Accordion } from "@/components/Accordion";
import { FAQRootProps } from "./types";
import MenuSelector from "./components/MenuSelector";

export default function FAQTemplateRoot({
  data,
  breadcrumbs,
}: FAQRootProps): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  const categoryMap = new Map<
    string,
    { id: number; label: string; icon: JSX.Element }
  >();

  let idCounter = 1;

  data.questions.forEach((q) => {
    if (!categoryMap.has(q.category.path)) {
      categoryMap.set(q.category.path, {
        id: idCounter,
        label: q.category.name,
        icon: (
          <img
            src={q.category.icon.url}
            alt={q.category.icon.alt}
            width={40}
            height={40}
            className="object-contain"
          />
        ),
      });
      idCounter += 1;
    }
  });

  const categoryOptions = Array.from(categoryMap.values());

  const categoryPathById = new Map(
    Array.from(categoryMap.entries()).map(([path, { id }]) => [id, path]),
  );

  const currentCategoryPath = categoryPathById.get(selectedCategory);

  const filteredQuestions = data.questions.filter(
    (question) => question.category.path === currentCategoryPath,
  );

  return (
    <PageLayout
      title={data.header?.title}
      subtitle={data.header?.description}
      breadcrumbs={breadcrumbs}
    >
      <h1 className="mt-10 text-center text-[25px] font-light text-primary md:text-5xl lg:mt-0 lg:text-left lg:text-title-lg">
        {data.content.heading}
      </h1>

      <div className="my-10">
        <MenuSelector
          options={categoryOptions}
          onClick={(id) => setSelectedCategory(id)}
        />
      </div>

      <div className="mb-10 w-full px-4 md:px-0">
        <Accordion
          titleClassName="text-primary text-xl md:text-2xl"
          content={filteredQuestions.map((item) => ({
            id: item.id,
            title: item.question,
            content: (
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: item.answer }}
                className="prose prose-sm"
              />
            ),
          }))}
        />
      </div>
    </PageLayout>
  );
}
