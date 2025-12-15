import React from 'react'
import TextIntroBlockProps from './TextIntroBlock.interface'
import styles from './TextIntroBlock.module.css'

const TextIntroBlock: React.FC<TextIntroBlockProps> = (props) => {
  return (
    <section className={styles.TextIntroBlock}>TextIntroBlock</section>
  )
}

export default TextIntroBlock