import Head from "next/head";
import Layout from "@/components/layout";
import ServiceScreen from "@/templates/ServiceScreen";
import { NextPageWithLayout } from "../_app";

const Service: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>
          Oncoclínicas - Referência em tratamento oncológico | Referência em
          tratamento oncológico - Encontre um Médico
        </title>
        <meta name="description" content="Serviço" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ServiceScreen />
      </main>
    </>
  );
};

Service.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Service;
