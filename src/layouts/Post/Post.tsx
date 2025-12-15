import React from 'react'
import PostProps from './Post.interface'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Post: React.FC<PostProps> = () => {
  return (
    <>
        <Header />
        <main></main>
        <Footer />
    </>
    
  )
}

export default Post