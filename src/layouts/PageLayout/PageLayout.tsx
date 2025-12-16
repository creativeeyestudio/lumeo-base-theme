'use client'

import React from 'react'
import { PageLayoutProps } from './PageLayout.interface'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Page: React.FC<PageLayoutProps> = () => {
  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  )
}

export default Page