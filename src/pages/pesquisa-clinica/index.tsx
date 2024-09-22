import Head from "next/head";
import Layout from "@/components/layout";
import ClinicalReseatchScreen from "@/templates/ClinicalResearchScreen";
import { NextPageWithLayout } from "../_app";

const Doctors: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>
          Oncoclínicas - Referência em tratamento oncológico | Referência em
          tratamento oncológico - Pesquisa Clínica
        </title>
        <meta name="description" content="Médicos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ClinicalReseatchScreen />
      </main>
    </>
  );
};

Doctors.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Doctors;
