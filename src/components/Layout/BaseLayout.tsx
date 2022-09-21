import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import { Navbar } from "@components/NavBar/Navbar";

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <PageContainer>
      <Navbar />
      {children}
    </PageContainer>
  );
};
