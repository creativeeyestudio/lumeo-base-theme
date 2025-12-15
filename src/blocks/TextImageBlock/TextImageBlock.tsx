import React from 'react'
import TextImageProps from './TextImage.interface'
import styles from './TextImageBlock.module.css'

const TextImageBlock: React.FC<TextImageProps> = (props) => {
  return (
    <section className={styles.TextImageBlock}>TextImageBlock</section>
  )
}

export default TextImageBlock