import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import React from 'react'
import { Link } from 'react-scroll'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import { useRouter } from 'next/router'


const Footer = () => {
    const router = useRouter()


    return (
        <div className=''>
            <div className='   items-center   justify-between p-4'>
                <p className='uppercase tracking-widest text-center pt-10 mt-10'>Let&#39;s connect</p>
                <div className=' rounded-lg pt-3 gap-3 items-center justify-center flex text-2xl cursor-pointer hover:scale-105 ease-in duration-300'>

                    <div className='rounded-lg bg-black/30 border-white border  shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/stephen-talley-the-developer">
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div className='rounded-lg bg-black/30 border-white border   shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/stvlley">
                            <FaGithub />
                        </a>
                    </div>
                    <div className='rounded-lg bg-black/30 border-white border  shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-lg bg-black/30 border-white border   shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1CRtnChxOacJ5YEFpgXheNUa-UK6vD6yA/view?usp=sharing">
                            <BsPersonLinesFill />
                        </a>
                    </div>
                    <div onClick={() => router.push('/admin')} className=' cursor-pointer p-3 hidden sm:flex text-black/0 uppercase tracking-widest  hover:border border-white rounded-lg text-sm hover:bg-black/30 hover:text-white hover:flex'>
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