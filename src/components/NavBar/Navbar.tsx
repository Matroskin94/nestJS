import { Toggle } from "@components/ui";
import { FC } from "react";
import {
  Menu,
  MenuContainer,
  MenuItem,
  NavbarContainer,
  LogoIcon,
  UserPanelContainer,
  UserLogo,
} from "./Navbar.styles";

export const Navbar: FC<{}> = () => {
  return (
    <NavbarContainer>
      <MenuContainer>
        <LogoIcon />
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      </MenuContainer>
      <UserPanelContainer>
        <Toggle />
        <p style={{ marginLeft: "18px" }}>User name</p>
        <UserLogo>U</UserLogo>
      </UserPanelContainer>
    </NavbarContainer>
  );
};
