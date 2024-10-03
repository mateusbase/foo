import { useRouter } from "next/router";
import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";
import Page from "@/components/Page";
import PageLayout from "@/components/PageLayout";
import { ContentData } from "@/utils/types";

const DynamicPage = (): JSX.Element => {
  const router = useRouter();
  const { slug } = router.query;

  const [content, setContent] = useState<ContentData | null>(null);

  useEffect(() => {
    if (slug) {
      builder
        .get("page", {
          userAttributes: {
            urlPath: `/${slug}`,
          },
        })
        .promise()
        .then((data) => {
          setContent(data);
        });
    }
  }, [slug]);

  if (!content) {
    return (
      <Page title="Oncoclínicas" description="Oncoclínicas">
        <PageLayout
          title="Página não encontrada - 404"
          subtitle="A página que você está procurando não foi encontrada."
        >
          <div />
        </PageLayout>
      </Page>
    );
  }

  return (
    <Page
      title={content?.data.title || "Oncoclínicas"}
      description={
        content?.data.description || "Referência em tratamento oncológico."
      }
    >
      <PageLayout
        title={content?.data.title}
        subtitle={content?.data.description}
      >
        <BuilderComponent model="page" content={content} />
      </PageLayout>
    </Page>
  );
};

export default DynamicPage;
