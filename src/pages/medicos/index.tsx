import DoctorsScreen from "@/templates/DoctorsScreen";
import Head from "next/head";
import Layout from "@/components/layout";
import { NextPageWithLayout } from "../_app";

const Doctors: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>
          Oncoclínicas - Referência em tratamento oncológico | Referência em
          tratamento oncológico - Encontre um Médico
        </title>
        <meta name="description" content="Médicos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DoctorsScreen />
      </main>
    </>
  );
};

Doctors.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Doctors;
