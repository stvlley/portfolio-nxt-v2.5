import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'


const Work = () => {
  return (
    <div id='work' className='w-full h-screen px-10 mt-40 p-10 sm:px-32  py-40  uppercase text-light items-center text-center'>
        <h2 className='font-light  tracking-widest text-gray-300'>work</h2>
        <p className='invisible sm:visible p-3 tracking-widest text-lg '>some recent projects</p>
        <div className='h-[600px] grid sm:grid-cols-2 gap-8'>
           
           <ProjectItem />
           <ProjectItem />
           <ProjectItem />
           <ProjectItem />
            
        </div>
    </div>
  )
}

export default Work