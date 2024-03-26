import PostScreen from "@/templates/PostScreen";
import Head from "next/head";
import Layout from "@/components/layout";
import { NextPageWithLayout } from "../_app";

const Posts: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Lista de posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PostScreen />
      </main>
    </>
  );
};

Posts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Posts;
