import React from 'react'
import { PageLayoutProps } from './PageLayout.interface'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const PageLayout: React.FC<PageLayoutProps> = ({ logo, page }: PageLayoutProps) => {
  return (
    <>
      <Header logo={logo} />
      <main></main>
      <Footer />
    </>
  )
}

export default PageLayout