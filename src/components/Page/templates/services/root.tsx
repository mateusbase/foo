import PageLayout from "@/components/PageLayout";
import { ServicesRootProps } from "./types";
import ServiceSection from "./components/ServiceSection";

export function ServicesRoot({
  data,
  breadcrumbs,
}: ServicesRootProps): JSX.Element {
  return (
    <main>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
        showSections
        sections={[
          {
            text: "Diagnóstico",
            href: "#diagnósticos",
          },
          { text: "Serviços", href: "#servicos" },
          {
            text: "Tratamentos",
            href: "#tratamentos",
          },
        ]}
      >
        <ServiceSection
          id="servicos"
          title={data.services.title}
          description={data.services.description}
          searchPlaceholder={data.services.searchPlaceholder}
          expandButtonText={data.services.expandButtonText}
          data={data.services.services.map((item) => ({
            id: item.path,
            title: item.title,
            description: item.description,
            slug: item.path,
            icon: item.icon,
          }))}
          links={data.services.links.map((item) => ({
            id: item.link.url ?? item.title,
            title: item.title,
            subTitle: item.subTitle,
            description: item.description,
            actionButtonText: data.services.expandButtonText,
            image: item.image,
            link: item.link,
          }))}
        />

        <ServiceSection
          id="diagnósticos"
          title={data.diagnosis.title}
          description={data.diagnosis.description}
          searchPlaceholder={data.diagnosis.searchPlaceholder}
          expandButtonText={data.diagnosis.expandButtonText}
          data={data.diagnosis.diagnosis.map((item) => ({
            id: item.path,
            title: item.title,
            description: item.description,
            slug: item.path,
            icon: item.icon,
          }))}
          links={data.diagnosis.links.map((item) => ({
            id: item.link.url ?? item.title,
            title: item.title,
            subTitle: item.subTitle,
            description: item.description,
            actionButtonText: data.diagnosis.expandButtonText,
            image: item.image,
            link: item.link,
          }))}
        />

        <div className="mb-10">
          <ServiceSection
            id="tratamentos"
            title={data.treatments.title}
            description={data.treatments.description}
            searchPlaceholder={data.treatments.searchPlaceholder}
            expandButtonText={data.treatments.expandButtonText}
            data={data.treatments.treatments.map((item) => ({
              id: item.path,
              title: item.title,
              description: item.description,
              slug: item.path,
              icon: item.icon,
            }))}
            links={data.treatments.links.map((item) => ({
              id: item.link.url ?? item.title,
              title: item.title,
              subTitle: item.subTitle,
              description: item.description,
              actionButtonText: data.treatments.expandButtonText,
              image: item.image,
              link: item.link,
            }))}
          />
        </div>
      </PageLayout>
    </main>
  );
}
