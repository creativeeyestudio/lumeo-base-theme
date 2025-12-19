import React from 'react'
import HeaderProps from './Header.interface'
import styles from './Header.module.css'
import Logo from '@/src/components/Logo/Logo'

const Header: React.FC<HeaderProps> = ({ logo }: HeaderProps) => {

  console.log(logo);
  
  return (
    <header className={styles.Header}>
      {/* {logo ?? <Logo src={logo.url} alt={logo.alt} />} */}
    </header>
  )
}

export default Header