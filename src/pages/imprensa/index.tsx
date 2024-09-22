import Head from "next/head";
import Layout from "@/components/layout";
import PresScreen from "@/templates/PressScreen";
import { NextPageWithLayout } from "../_app";

const Press: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>
          Oncoclínicas - Referência em tratamento oncológico | Referência em
          tratamento oncológico - Encontre um Médico
        </title>
        <meta name="description" content="Oncoclínicas - Encontre um Médico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PresScreen />
      </main>
    </>
  );
};

Press.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Press;
