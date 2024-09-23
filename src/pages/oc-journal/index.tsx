import Head from "next/head";
import Layout from "@/components/layout";
import OcJournalScreen from "@/templates/OcJournalScreen";
import { NextPageWithLayout } from "../_app";

const Doctors: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>
          Oncoclínicas - Referência em tratamento oncológico | Referência em
          tratamento oncológico - Oc Journal
        </title>
        <meta name="description" content="Oc Journal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <OcJournalScreen />
      </main>
    </>
  );
};

Doctors.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Doctors;
