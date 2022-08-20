import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <>
            <div className='w-full h-screen text-center '>
                <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                    <div className='sm:flex'>
                        <div >
                            <h1 className='py-4  sm:text-right text-gray-300'><div className='invisible sm:visible'>Hi, I'm </div><span className='text-5xl sm:text-7xl tracking-widest text-[#b0f4ef]'>Stephen Talley</span></h1>
                        </div>
                        <div>
                        <h1 className='mb-5 text-2xl sm:text-6xl mx-3 px-3 m-auto text-gray-300 text-left'>
                                A Fullstack Web Developer
                        </h1>
                        <button className='border border-white sahdow-lg shadow-black/80 text-md sm:text-lg md:text-xl md:px-6 md:p-4'>View My Work</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main