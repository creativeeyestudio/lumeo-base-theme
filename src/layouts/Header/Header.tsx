import React from "react";
import HeaderProps from "./Header.interface";
import styles from "./Header.module.css";
import Logo from "@/src/components/Logo/Logo";

const Header: React.FC<HeaderProps> = ({ logo }) => {
  
  return (
    <header className={styles.Header}>
      {logo && <Logo url={logo.url} alt={logo.alt} width={180} height={60} />}
    </header>
  );
};

export default Header;