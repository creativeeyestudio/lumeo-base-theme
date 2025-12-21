import React from "react";
import HeaderProps from "./Header.interface";
import styles from "./Header.module.css";

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  
  return (
    <header className={styles.Header}>
      {children}
    </header>
  );
};

export default Header;