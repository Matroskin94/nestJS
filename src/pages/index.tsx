import { PageHead } from "@components/index";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <PageHead pageTitle="Next TV films" />

      <h1>Next JS</h1>
      <p>Page for films list</p>
    </>
  );
};

export default Home;
