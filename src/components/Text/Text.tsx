import React from 'react'
import TextProps from './Text.interface'
import styles from './Text.module.css'

const Text: React.FC<TextProps> = (props) => {
  return (
    <section className={styles.Text}>Text</section>
  )
}

export default Text