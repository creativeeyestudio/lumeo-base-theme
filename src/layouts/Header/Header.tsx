import React from "react";
import HeaderProps from "./Header.interface";
import styles from "./Header.module.css";
import Logo from "@/src/components/Logo/Logo";
import Navigation from "@/src/components/Navigation/Navigation";

const Header: React.FC<HeaderProps> = ({ logo, menus }) => {
  
  return (
    <header className={styles.Header}>
      {logo && <Logo url={logo.url} alt={logo.alt} width={180} height={60} />}
      {menus && <Navigation menus={menus} menuId={"main-menu"} />}
    </header>
  );
};

export default Header;