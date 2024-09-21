import Head from "next/head";
import Layout from "@/components/layout";
import WhoWeArecreen from "@/templates/WhoWeAreScreen";
import { NextPageWithLayout } from "../_app";

const WhoWeAre: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Serviço</title>
        <meta name="description" content="Serviço" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WhoWeArecreen />
      </main>
    </>
  );
};

WhoWeAre.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default WhoWeAre;
