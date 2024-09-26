import Head from "next/head";
import Layout from "@/components/layout";
import ClippingScreen from "@/templates/ClippingScreen";
import { NextPageWithLayout } from "../_app";

const Clipping: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>
          Oncoclínicas - Referência em tratamento oncológico | Referência em
          tratamento oncológico - Clipping
        </title>
        <meta name="description" content="Oncoclínicas - Clipping" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ClippingScreen />
      </main>
    </>
  );
};

Clipping.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Clipping;
