import React from 'react'
import Skills from './Skills'

const About = () => {
    return (
        <div className='w-full h-screen py-40 bg-black/30 justify-center items-center text-center'>
            <div name='about' className='text-white  w-full h-[400px] '>
                <div className='flex flex-col justify-center sm:items-center w-full h-full'>
                    <div className=' p-1 rounded-lg px-3 mx-6 hover:scale-110 duration-500 '>
                        <p className=' text-2xl px-1 sm:text-3xl tracking-widest  m-1 w-full  uppercase text-gray-300 '>About</p>
                    </div>
               
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='hover:scale-110 duration-500  text-center  sm:text-right text-2xl  sm:text-3xl md:text-6xl font-bold'>
                            <p className="text-[#b0f4ef]">"Building the future one line of code at a time"</p>
                        </div>
                        <div className='hover:scale-110 duration-500 '>
                            <p className="tracking-widest text-sm text-left sm:text-lg p-3 mb-5">Language agnostic Software Engineer always striving to sharpen my coding skills. Maintains a curious and critical mindset. Posseses a logical and intuitive perspective that elevates my ability to find unconventional solutions to complex business problems. I stay sharp and diligent and always keep the bigger picture in sight. I believe consistency is the key that unlocks all doors to opportunity. </p>
                        </div>
                    </div>
                </div>
            </div>
            <Skills />
        </div>
    )
}

export default About