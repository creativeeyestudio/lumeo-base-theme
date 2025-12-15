import React from 'react'
import { PageProps } from './Page.interface'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Page: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  )
}

export default Page