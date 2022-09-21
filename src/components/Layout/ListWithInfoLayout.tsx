import { Footer } from "@components/Footer/Footer";
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
  width: 360px;
  min-width: 360px;
  height: 100%;
  overflow-y: auto;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const MainContent = styled.main`
  flex: 1 0 auto;
`;

export const ListWithInfoLayout: FC<IListWithInfoLayout> = ({
  mainPart,
  sidePart,
}) => {
  return (
    <LayoutContainer>
      <MainPartWrapper>
        <>
          <MainContent>{mainPart}</MainContent>
          <Footer />
        </>
      </MainPartWrapper>
      <SidePart isVisible>{sidePart}</SidePart>
    </LayoutContainer>
  );
};
