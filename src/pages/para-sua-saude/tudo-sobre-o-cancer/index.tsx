import Head from "next/head";
import Layout from "@/components/layout";
import { NextPageWithLayout } from "@/pages/_app";
import AllAboutCancerScreen from "@/templates/AllAboutCancerScreen";

const AllAboutCancer: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Tudo sobre o Câncer</title>
        <meta name="description" content="Tudo sobre o Câncer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AllAboutCancerScreen />
      </main>
    </>
  );
};

AllAboutCancer.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AllAboutCancer;
