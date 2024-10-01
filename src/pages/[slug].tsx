import { useRouter } from "next/router";
import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";
import Page from "@/components/Page";
import PageLayout from "@/components/PageLayout";

const DynamicPage = (): JSX.Element => {
  const router = useRouter();
  const { slug } = router.query;

  interface ContentData {
    data: {
      title: string;
      description: string;
    };
  }

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
    return <p>Carregando...</p>;
  }

  return (
    <Page
      title={content?.data.title || "Página Dinâmica"}
      description={content?.data.description || "Descrição da página dinâmica"}
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
