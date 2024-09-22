import Head from "next/head";
import Layout from "@/components/layout";
import EventsScreen from "@/templates/EventsScreen";
import { NextPageWithLayout } from "../_app";

const Press: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>
          Oncoclínicas - Referência em tratamento oncológico | Referência em
          tratamento oncológico - Eventos
        </title>
        <meta name="description" content="Oncoclínicas - Eventos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <EventsScreen />
      </main>
    </>
  );
};

Press.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Press;
