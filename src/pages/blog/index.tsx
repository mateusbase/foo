import Head from "next/head";
import Layout from "@/components/layout";
import BlogScreen from "@/templates/BlogScreen";
import { NextPageWithLayout } from "../_app";

const Blog: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>
          Oncoclínicas - Referência em tratamento oncológico | Referência em
          tratamento oncológico - Encontre um Médico
        </title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BlogScreen />
      </main>
    </>
  );
};

Blog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Blog;
