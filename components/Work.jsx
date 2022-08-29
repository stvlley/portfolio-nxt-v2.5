import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import p1 from '../public/fineline-1.png'
import p2 from '../public/batdash-1.png'
import p3 from '../public/prjctmgmt-1.png'
import p4 from '../public/project1.png'

const Work = () => {
  return (
    <div className='w-full h-screen px-10 md:pt-16 md:h-[800px] mt-40 p-10 sm:px-32  py-40  uppercase text-light items-center text-center'>
      <h2 className='font-light  tracking-widest text-gray-300'>work</h2>
      <p className='invisible sm:visible p-3 tracking-widest text-lg '>some recent projects</p>
      <div className='h-[600px] grid sm:grid-cols-2 gap-8'>

        <ProjectItem
          img={p1}
          detailsRef={'fineline'}
          name='Fine Line'
          appType={'NextJS Blog App'}
          liveLink={'https://next-blog-five-navy-21.vercel.app/'} />


        <ProjectItem
          img={p2}
          detailsRef={'batdash'}
          name='Bat Dash'
          appType={'Ecommerce Dashboard'}
          liveLink={'https://batman-dashboard.vercel.app/'} />


        <ProjectItem
          img={p3}
          detailsRef={'prjctmgmt'}
          name='Prjct Mgmt'
          appType={'Project Management App'}
          liveLink={'https://next-blog-five-navy-21.vercel.app/'} />


        <ProjectItem
          img={p4}
          detailsRef={'personalsite'}
          name='Personal Site'
          appType={'Personal Portfolio'}
          liveLink={'https://next-blog-five-navy-21.vercel.app/'} />


      </div>
    </div>
  )
}

export default Work