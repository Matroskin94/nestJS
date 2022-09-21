import { ListWithInfoLayout, PageHead } from "@components/index";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <PageHead pageTitle="Next TV films" />
      <ListWithInfoLayout
        mainPart={
          <>
            <h1>Next JS</h1>
            <p>Page for films</p>
          </>
        }
        sidePart={<div>Side part</div>}
      />
    </>
  );
};

export default Home;
