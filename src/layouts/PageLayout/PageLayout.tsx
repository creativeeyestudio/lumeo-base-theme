import React from 'react'
import { PageLayoutProps } from './PageLayout.interface'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const PageLayout: React.FC<PageLayoutProps> = (props: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  )
}

export default PageLayout