import Head from "next/head";
import Layout from "@/components/layout";
import ReleasesScreen from "@/templates/ReleasesScreen";
import { NextPageWithLayout } from "../_app";

const Releases: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>
          Oncoclínicas - Referência em tratamento oncológico | Referência em
          tratamento oncológico - Releases
        </title>
        <meta name="description" content="Oncoclínicas - Releases" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ReleasesScreen />
      </main>
    </>
  );
};

Releases.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Releases;
