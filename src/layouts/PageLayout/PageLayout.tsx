import React from 'react'
import { PageLayoutProps } from './PageLayout.interface'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const PageLayout: React.FC<PageLayoutProps> = ({ logo, page, menus }: PageLayoutProps) => {
  return (
    <>
      <Header logo={logo} menus={menus} />
      <main></main>
      <Footer menus={menus} />
    </>
  )
}

export default PageLayout