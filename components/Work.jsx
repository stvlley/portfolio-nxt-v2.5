import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'


const Work = () => {
  return (
    <div className='w-full h-screen px-10 md:pt-28 md:h-[800px] mt-40 p-10 sm:px-32  py-40  uppercase text-light items-center text-center'>
        <h2 className='font-light  tracking-widest text-gray-300'>work</h2>
        <p className='invisible sm:visible p-3 tracking-widest text-lg '>some recent projects</p>
        <div className='h-[600px] grid sm:grid-cols-2 gap-8'>
           
           <ProjectItem detailsRef={'1'} name='Fine Line' appType={'NextJS Blog App'} liveLink={'https://next-blog-five-navy-21.vercel.app/'}/>
           <ProjectItem detailsRef={'2'} name='Fine Line' appType={'NextJS Blog App'} liveLink={'https://next-blog-five-navy-21.vercel.app/'}/>
           <ProjectItem detailsRef={'3'} name='Fine Line' appType={'NextJS Blog App'} liveLink={'https://next-blog-five-navy-21.vercel.app/'}/>
           <ProjectItem detailsRef={'4'} name='Fine Line' appType={'NextJS Blog App'} liveLink={'https://next-blog-five-navy-21.vercel.app/'}/>
          
            
        </div>
    </div>
  )
}

export default Work