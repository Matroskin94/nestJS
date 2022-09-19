import { ThemeContext } from "@components/ThemeWrapper";
import { Toggle } from "@components/ui";
import { FC, useContext, useState } from "react";
import { DARK_THEME, LIGHT_THEME } from "src/constants/styles/theme";
import {
  Menu,
  MenuContainer,
  MenuItem,
  NavbarContainer,
  LogoIcon,
  UserPanelContainer,
  UserLogo,
} from "./Navbar.styles";

export const Navbar: FC = () => {
  const { changeTheme } = useContext(ThemeContext);
  const [isDarkMode, setDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    changeTheme(!isDarkMode ? DARK_THEME : LIGHT_THEME);
    setDarkMode(!isDarkMode);
  };

  return (
    <NavbarContainer>
      <MenuContainer>
        <LogoIcon fill={isDarkMode ? "white" : "black"} />
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      </MenuContainer>
      <UserPanelContainer>
        <Toggle isChecked={isDarkMode} onChange={handleDarkModeChange} />
        <p style={{ marginLeft: "18px" }}>User name</p>
        <UserLogo>U</UserLogo>
      </UserPanelContainer>
    </NavbarContainer>
  );
};
