import { useState, useEffect } from 'react'
import {AiFillHtml5, } from 'react-icons/ai'
import {DiCss3 } from 'react-icons/di'
import Image from 'next/image'
export default function Skills() {

    const [size, setSize] = useState(55)

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 900){
            setSize(70)
        } else {
            setSize(40)
        }
      }
      window.addEventListener('resize', handleResize)

      return () => {
          window.removeEventListener('resize', handleResize)
      }
    
    
    }, [])
    


  return (
        <>

        <div id='skills' name='skills' className=' py-6 w-full h-[500px] text-white '>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col  justify-center w-full h-full'>
          <div className='mt-6 p-4 hover:scale-110 duration-500 '>
              <p className='text-2xl uppercase tracking-widest text-gray-300'>Skills</p>
          </div>
      

          <div className='w-full mb-5 text-xs md:text-sm text-white tracking-widest grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
              <div className=' rounded-lg pt-3 bg-black/30 border border-white hover:scale-110 duration-500'>
                  <Image priority src='/html.svg' alt='' width={size} height={size} />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md bg-black/30 border border-white hover:scale-110 duration-500'>
              <Image priority src='/css.svg' alt='' width={size} height={size} />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md border border-white  bg-black/30 hover:scale-110 duration-500'>
              <Image priority src='/javascript.svg' alt='' width={size} height={size} />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-black/30 border border-white hover:scale-110 duration-500'>
              <Image priority src='/rails.svg' alt='' width={size} height={size} />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-black/30 border border-white hover:scale-110 duration-500'>
              <Image priority src='/react-light.svg' alt='' width={size} height={size} />
                  <p className='my-4'>RAILS</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-black/30 border border-white hover:scale-110 duration-500'>
              <Image priority src='/nextjs-light.svg' alt='' width={size} height={size} />
                  <p className='my-4'>NEXTJS</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-black/30 border border-white hover:scale-110 duration-500'>
              <Image priority src='/tailwindcss-light.svg' alt='' width={size} height={size} />
                  <p className='my-4'>TAILWINDCSS</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md bg-black/30 border border-white  hover:scale-110 duration-500'>
              <Image priority src='/python-light.svg' alt='' width={size} height={size} />
                  <p className='my-4'>PYTHON</p>
              </div>
              
          </div>

  
      </div>
    </div>
    </>
  )
}
