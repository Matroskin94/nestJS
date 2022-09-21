import { ThemeContext } from "@components/ThemeWrapper";
import { Divider, Toggle } from "@components/ui";
import { IMenuItem, menuItems } from "@constants/routing/menu";
import { DARK_THEME, LIGHT_THEME } from "@constants/styles/theme";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useContext, useState } from "react";
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
  const router = useRouter();
  const [isDarkMode, setDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    changeTheme(!isDarkMode ? DARK_THEME : LIGHT_THEME);
    setDarkMode(!isDarkMode);
  };

  return (
    <NavbarContainer>
      <MenuContainer>
        <LogoIcon fill={isDarkMode ? "white" : "black"} />
        <Divider color="#d7d7d7" marginLeft="8px" />
        <Menu>
          {menuItems.map((item: IMenuItem) => (
            <Link key={item.link} href={item.link}>
              <MenuItem isActive={item.link === router.pathname}>
                {item.text}
              </MenuItem>
            </Link>
          ))}
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
