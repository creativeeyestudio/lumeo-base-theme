import React from 'react'
import HeaderProps from './Header.interface'
import styles from './Header.module.css'

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.Header}></header>
  )
}

export default Header