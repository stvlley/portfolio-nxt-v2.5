import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'
import { useEffect, useState } from 'react'
import {HashLoader} from 'react-spinners'
import Footer from '../components/Footer'
import WorkPage from './work'
import Published from '../components/Published'

function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1000)


  }, [])
  return (
    <div className='bg-black/20'>
      <Head>
            <title className=''>Stephen Talley | Software Engineer</title>
            <meta name='content' content='Language agnostic Software Engineer always striving to sharpen my coding skills. Maintains a curious and critical mindset. Posseses a logical and intuitive perspective that elevates my ability to find unconventional solutions to complex business problems. I stay sharp and diligent and always keep the bigger picture in sight. I believe consistency is the key that unlocks all doors to opportunity.' />
            <link rel="icon" href="/logo.svg" />
      </Head>
      {loading ?
        <div className='w-full h-screen bg-gradient-to-r from-[#3b86d6] to-[#3ed6b5] '>
          <HashLoader
          style={{}}
            color="#03fcdb"
            loading={loading}
            size={150}
            speedMultiplier={1}
          />
        </ div> :
            <div className=''>
          
          <Navbar />
          <Main />
          <About />
          <WorkPage />
          <Published />
          <Contact />
          <Footer />
     
        </div>}
    </div>
  )
}

export default Home