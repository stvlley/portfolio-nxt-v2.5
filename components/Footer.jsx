import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import React from 'react'
import { Link } from 'react-scroll'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'



const Footer = () => {
    return (
        <div className=''>
            <div className='   items-center   justify-between p-4'>
                <p className='uppercase tracking-widest text-center pt-10 mt-10'>Let's connect</p>
                <div className=' rounded-lg pt-3 gap-3 items-center justify-center flex text-2xl cursor-pointer hover:scale-105 ease-in duration-300'>

                    <div className='rounded-lg bg-black/30 border-white border  shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-lg bg-black/30 border-white border   shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-lg bg-black/30 border-white border  shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-lg bg-black/30 border-white border   shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1dqgJ1e0UvCjaWArJFzxDVN38qDSvMZwx/view?usp=sharing">
                            <BsPersonLinesFill />
                        </a>
                    </div>
                    <div className=' p-3 hidden sm:flex text-black/0 uppercase tracking-widest  hover:border border-white rounded-lg text-sm hover:bg-black/30 hover:text-white hover:flex'>
                        admin
                    </div>
                    <div>
                        <div className='flex justify-center border border-white p-3 rounded-lg bg-black/30'>
                        <Link  spy={true}  offset={50} duration={700} to='main'>
                            <HiOutlineChevronDoubleUp />
                        </Link>
                        </div>
                    </div>

                </div>
            </div>
            <footer className=' w-full h-[20%] p-3   uppercase tracking-widest items-center text-center'>stephen talley | 2022</footer>
        </div>
    )
}

export default Footer