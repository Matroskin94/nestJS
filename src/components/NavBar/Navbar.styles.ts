import { SiteLogo } from "@assets/icons";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  border-bottom: 1px solid #eeeeee;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuContainer = styled.menu`
  padding-inline-start: 0px;
  display: flex;
`;

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  margin-left: 8px;
  align-items: center;
`;

export const MenuItem = styled.li`
  margin-right: 8px;
  cursor: pointer;
`;

export const LogoIcon = styled(SiteLogo)`
  width: 75px;
  height: 25px;
`;

export const UserPanelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserLogo = styled.div`
  background-color: #f7b511;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;
