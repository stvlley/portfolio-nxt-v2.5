import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import p1 from '/Users/stvlley/portfolio-nxt-v2-1/public/project1.png'

const ProjectItem = () => {
  return (
    <div className=''>
         <div className="flex bg-black/30 border border-white items-center justify-center h-auto w-full shadow-xl shadow-black/90 rounded-lg p-4 group hover:bg-gradient-to-r from-[#257dc5] to-[#4bb488]   relative">
                <Image priority className='rounded-lg group-hover:opacity-20' src={p1} alt='' />
                <div className='hidden uppercase tracking-widest group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-bold text-2xl'>Portfolio Website v2</h3>
                    <p>NextJS Project</p>
                    <Link href={`work/1`}>
                        <p className='hover:bg-black/40 rounded-lg cursor-pointer border m-2 p-2 border-white'>details</p>
                    </Link>
                    {/* change to dynamic path with project id */}
                    <Link duration={500} href={`work/1`}>
                        <p className='hover:bg-gradient-to-r  from-[#ff0000] to-[#ff0303] rounded-lg border m-2 p-2 border-white cursor-pointer'>live</p>
                    </Link>
                   
                </div>
            </div>
    </div>
  )
}

export default ProjectItem