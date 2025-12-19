import React from 'react'
import Image from 'next/image'
import { LogoProps } from './Logo.interface'

type Props = {}

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  return (<Image src={props.src} alt={props.alt} />)
}

export default Logo