import Head from "next/head";
import Layout from "../layout";
import { PageProps } from "./types";

export default function Page({
  children,
  title,
  description = "Oncoclínicas - Referência em tratamento oncológico",
}: PageProps): JSX.Element {
  return (
    <Layout>
      <>
        <Head>
          <title>{`Oncoclínicas - ${title}`}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{children}</main>
      </>
    </Layout>
  );
}
