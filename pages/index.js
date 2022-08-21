import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Work from '../components/Work'

export default function Home() {
  return (
    <div className='bg-black/30 w-full  h-screen'>
      <Head>
        <title>Stephen | Softare Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Work />
    </div>
  )
}
