import Head from "next/head";
import Layout from "@/components/layout";
import EventScreen from "@/templates/EventScreen";
import { NextPageWithLayout } from "../_app";

const Doctor: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>
          Oncoclínicas - Referência em tratamento oncológico | Referência em
          tratamento oncológico - Encontre um Médico
        </title>
        <meta name="description" content="Medico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <EventScreen />
      </main>
    </>
  );
};

Doctor.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Doctor;
