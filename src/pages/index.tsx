import { ListWithInfoLayout, PageHead } from "@components/index";
import { useTypedDispatch } from "@utils/redux/hooks/useTypedDispatch";
import { useTypedSelector } from "@utils/redux/hooks/useTypedSelector";
import { getIsSideBarOpen, sideBarActions } from "@utils/redux/slices/sideBar.slice";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const dispatch = useTypedDispatch();
  const isSideBarOpened = useTypedSelector(getIsSideBarOpen);
  const handleSideBar = () => {
    dispatch(sideBarActions.setIsOpened(!isSideBarOpened));
  };

  return (
    <>
      <PageHead pageTitle="Next TV films" />
      <ListWithInfoLayout
        mainPart={
          <>
            <h1>Next JS</h1>
            <p>Page for films</p>
            <button onClick={handleSideBar}>Side bar toggle</button>
          </>
        }
        sidePart={<div>Side part</div>}
      />
    </>
  );
};

export default Home;
