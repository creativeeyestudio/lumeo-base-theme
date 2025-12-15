import React from 'react'
import HeroscreenBlockProps from './HeroscreenBlock.interface'
import styles from './HeroscreenBlock.module.css'

const HeroscreenBlock: React.FC<HeroscreenBlockProps> = (props) => {
  return (<figure className={styles.HeroscreenBlock}></figure>)
}

export default HeroscreenBlock