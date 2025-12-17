import React from 'react'
import ImageProps from './Image.interface'
import * as styles from './Image.module.css'

let NextImage: any;
try {
    NextImage = require('next/image').default
} catch (error) {
    NextImage = null
}

const ThemeImage: React.FC<ImageProps> = () => {
    // if (NextImage) {
    //     return <NextImage src={src} alt={alt} width={width} height={height} />
    // }

    // return (
    //     <img src="" alt="" />
    // )

    return <></>;
}

export default ThemeImage