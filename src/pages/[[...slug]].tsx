import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { RenderPage } from "@/components/Page";
import { Breadcrumb, GetPageByPathResult } from "@/types/page";
import apiServer from "@/services/apiServer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { localeMap } from "@/utils/objectUtils";
import NotFound from "./404";

type PageProps = GetPageByPathResult & { isNotFound?: boolean };

interface StaticPropsParams {
  params?: {
    /**
     * Slug is undefined when page is /
     */
    slug?: string[];
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await apiServer.get("api/pages/paths", {
      headers: { Authorization: process.env.PAGE_API_TOKEN! },
    });

    const rawPaths: string[] = response.data;

    const paths = rawPaths.map((path) => {
      const slug = path.split("/").filter(Boolean);

      return { params: { slug } };
    });

    return { paths, fallback: "blocking" };
  } catch (error) {
    error;

    return { paths: [], fallback: "blocking" };
  }
};

export const getStaticProps: GetStaticProps<PageProps> = async ({
  params,
}: StaticPropsParams) => {
  const slugArray = params?.slug ?? [];

  const path = `/${slugArray.join("/")}`;

  try {
    const response = await apiServer.post(
      "api/pages/load",
      { path },
      { headers: { Authorization: process.env.PAGE_API_TOKEN! } },
    );

    const json = response.data;

    if (!json.found) {
      return {
        props: {
          isNotFound: true,
          header: json.header ?? null,
          footer: json.footer ?? null,
        } as PageProps,
        revalidate: 60,
      };
    }

    const { page } = json;

    const pageData: PageProps = {
      path,

      kind: page.kind,

      language: page.language,

      breadcrumbs: page.breadcrumbs.map((breadcrumb: Breadcrumb) => ({
        name: breadcrumb.name,
        path: breadcrumb.path,
      })),

      meta: {
        title: page.meta.title,
        description: page.meta.description,
        keywords: page.meta.keywords,
        image: page.meta.image ?? null,
      },

      id: page.id,
      type: page.kind,
      data: page.data,
      header: page.header ?? null,
      footer: page.footer ?? null,

      articleJSON: page.articleJSON ?? null,
    };

    return { props: pageData, revalidate: 60 };
  } catch (_err: unknown) {
    return { notFound: true };
  }
};

export default function Page({
  meta,
  isNotFound,
  ...props
}: PageProps): JSX.Element {
  const { articleJSON, language } = props;

  if (isNotFound || !meta || !meta.title) {
    return (
      <>
        {props.header && <Header data={props.header} />}

        <NotFound />

        {props.footer && <Footer data={props.footer} />}
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <meta name="author" content="Oncoclínicas" />

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />

        <meta property="og:locale" content={localeMap[language] || "pt_BR"} />

        {meta.image && (
          <>
            <meta property="og:image" content={meta.image.url} />
            <meta property="og:image:alt" content={meta.image.alt} />
          </>
        )}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />

        {meta.image && (
          <>
            <meta name="twitter:image" content={meta.image.url} />
            <meta name="twitter:image:alt" content={meta.image.alt} />
          </>
        )}

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script type="application/ld+json">
          {JSON.stringify(articleJSON)}
        </script>
      </Head>

      <RenderPage {...props} />
    </>
  );
}
