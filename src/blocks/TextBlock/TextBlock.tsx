import React from 'react'
import TextBlockProps from './TextBlock.interface'
import styles from './TextBlock.module.css'

const TextBlock: React.FC<TextBlockProps> = (props) => {
  return (
    <section className={styles.TextBlock}>TextBlock</section>
  )
}

export default TextBlock