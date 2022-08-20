import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <>
            <div className='w-full h-screen text-center '>
                <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                    <div>
                        <div className='flex'>
                            <h1 className='py-4 px-5 text-right text-gray-300'><div className=''>Hi, I'm </div><span className='text-5xl sm:text-7xl text-[#71fff3]'>Stephen Talley</span></h1>
                            <h1 className='py-4 text-2xl sm:text-6xl max-w-[70%] m-auto text-gray-300 text-left'>
                                A Fullstack Web Developer
                            </h1>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Main