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
            <title >Stephen Talley | Software Engineer</title>
            <meta name='description' content='Stephen Talley Software Engineer Portfolio'/>
                <meta name='keywords' content='Web Dev, Software Developer, Engineer, Coder, Coding, Tech, Blockchain, Crypto, Technology, Web Development, Application Development, AI, Machine Learning, Artificial Intelligence, Programmer, Computer Science Guy, CompSci, Code Monkey, Hacker, Front End Developer, Backend Developer, The best software engineer in the world, Blogger, Content Creator, Youtuber, Creator, Creative' />
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