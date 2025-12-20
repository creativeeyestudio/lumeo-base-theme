import React from 'react'
import Image from 'next/image'
import { LogoProps } from './Logo.interface'

const Logo: React.FC<LogoProps> = ({ url, alt, width, height }) => {
  return (
    process.env.PAYLOAD_URL ? <Image
      src={process.env.PAYLOAD_URL + url}
      alt={alt ?? ''}
      width={width}
      height={height}
      style={{ objectFit: 'contain' }}
    /> : <></>
  )
}

export default Logo
