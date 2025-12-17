import React from 'react'
import TextImageDoubleBlockProps from './TextImageDoubleBlock.interface'
import styles from './TextImageDoubleBlock.module.css'

const TextImageDoubleBlock: React.FC<TextImageDoubleBlockProps> = (props) => {
  return (
    <section className={styles.TextImageDoubleBlock}>TextImageDoubleBlock</section>
  )
}

export default TextImageDoubleBlock