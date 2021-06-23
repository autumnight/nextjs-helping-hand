import Head from 'next/head';
import Header from '../components/header/Header.js';
import Footer from '../components/footer/Footer.js';



export default function MainLayout({children, title = "Base title"}) {
  return (
    <>
    <Head>
      <title>{title} | Page</title>
      <link rel="icon" href="/favicon.ico"/>/>
    </Head>

      <Header/>

      <main>
        {children}

      </main>

      <Footer/>
    </>
  )
}
