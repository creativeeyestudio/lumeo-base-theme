import React from 'react'
import FooterProps from './Footer.interface'
import styles from './Footer.module.css'

const Footer: React.FC<FooterProps> = ({ children }: FooterProps) => {
  return (
    <footer className={styles.Footer}>
      {children}
    </footer>
  )
}

export default Footer