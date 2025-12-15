import React from 'react'
import CardProps from './Card.interface'
import styles from './Card.module.css'

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={styles.Card}>Card</div>
  )
}

export default Card