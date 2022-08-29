import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { BiRightArrow } from 'react-icons/bi'
const Main = () => {
    return (
        <>
            <div id='main' className='w-full justify-center items-center h-screen text-center '>
                <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                    <div className='sm:flex'>
                        <div >
                            <h1 className='py-4  sm:text-right text-gray-300'><div className='invisible sm:visible'>Hi, I&#39;m </div><span className='text-5xl sm:text-7xl uppercase tracking-widest text-[#b0f4ef]'>Stephen Talley</span></h1>
                        </div>
                        <div className='items-center justify-center text-center'>
                            <h1 className='uppercase tracking-widest font-light mb-5 text-lg sm:text-6xl mx-3 px-3 m-auto text-gray-300 text-left'>
                                A Fullstack Web Developer
                            </h1>
                           <div className='px-16'>
                           <Link to='work' >
                                <button
                                    className='flex justify-center group items-center rounded-lg text-white border px-6 py-3 '>
                                    <p>view my work</p>
                                    <span className='group-hover:rotate-90 duration-300'>
                                        <BiRightArrow />
                                    </span>
                                </button>
                            </Link>
                           </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main