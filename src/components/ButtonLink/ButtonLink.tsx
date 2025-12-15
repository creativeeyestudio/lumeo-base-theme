import React from 'react'
import ButtonLinkProps from './ButtonLink.interface'
import styles from './ButtonLink.module.css'

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, label, blank = false }) => {
  return (
    <a href={href} target={blank ? '_blank' : ''} className={`${styles.ButtonLink}`}>{label}</a>
  )
}

export default ButtonLink