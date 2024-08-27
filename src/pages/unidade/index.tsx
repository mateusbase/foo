import Head from "next/head";
import Layout from "@/components/layout";
import { NextPageWithLayout } from "../_app";
import UnitScreen from "@/templates/UnitScreen";

const Unit: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Unidade</title>
        <meta name="description" content="Unidade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <UnitScreen />
      </main>
    </>
  );
};

Unit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Unit;
