import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "@components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Next JS</h1>
    </Layout>
  );
};

export default Home;
