import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export const siteTitle = 'Tutorial'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Tutorial" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}