import { Footer } from "@components/Footer/Footer";
import { useTypedSelector } from "@utils/redux/hooks/useTypedSelector";
import { getIsSideBarOpen } from "@utils/redux/slices/sideBar.slice";
import { FC } from "react";
import styled from "styled-components";

interface IListWithInfoLayout {
  mainPart: JSX.Element;
  sidePart: JSX.Element;
}

const LayoutContainer = styled.div`
  display: flex;
  height: calc(100vh - 74px);
`;

const MainPartWrapper = styled.main`
  flex-grow: 1;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const SidePart = styled.aside<{ isVisible: boolean }>`
  background: darkgrey;
  height: 100%;
  overflow-y: auto;
  width: ${({ isVisible }) => (isVisible ? "360px" : "0px")};
  min-width: ${({ isVisible }) => (isVisible ? "360px" : "0px")};
  transition: all 0.5s ease;
`;

const MainContent = styled.main`
  flex: 1 0 auto;
`;

export const ListWithInfoLayout: FC<IListWithInfoLayout> = ({
  mainPart,
  sidePart,
}) => {
  const isSideBarOpened = useTypedSelector(getIsSideBarOpen);

  return (
    <LayoutContainer>
      <MainPartWrapper>
        <>
          <MainContent>{mainPart}</MainContent>
          <Footer />
        </>
      </MainPartWrapper>
      <SidePart isVisible={isSideBarOpened}>{sidePart}</SidePart>
    </LayoutContainer>
  );
};
