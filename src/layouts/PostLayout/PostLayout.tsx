import React from 'react'
import PostLayoutProps from './PostLayout.interface'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const PostLayout: React.FC<PostLayoutProps> = () => {
  return (
    <>
        <Header />
        <main></main>
        <Footer />
    </>
  )
}

export default PostLayout