import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logoToggle, setlogoToggle] = useState('/logo.svg')
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('#dffffff');
    const [style, setStyle] = useState('fixed bg-gradient-to-l from-[#303030]/90 to-[#1b1b1b]/90 w-full h-30 shadow-xl ')
    const [iconToggle, setIconToggle] = useState('cursor-pointer hover:scale-105 duration-700 md:hidden px-3')
    
   useEffect(() => {
      const changeColor = () => {
        if (window.scrollY >= 900) {
          setColor('#ffffff');
          setTextColor('#000000');
          setlogoToggle('/logo-dark.svg');
          setStyle('fixed bg-gradient-to-l z-[100] from-[#dffff9]/50 to-[#c3c3c3] w-full h-30 shadow-xl ')
          setIconToggle('text-black cursor-pointer hover:scale-105 duration-700 md:hidden px-3')
        } else {
          setColor('transparent');
          setTextColor('#ffffff');
          setlogoToggle('/logo.svg');
          setStyle('fixed bg-gradient-to-l z-[100] from-[#303030]/90 to-[#1b1b1b]/90 w-full h-30 shadow-xl ')
          setIconToggle('text-white cursor-pointer hover:scale-105 duration-700 md:hidden px-3')
        }
      };
      window.addEventListener('scroll', changeColor);
    }, []);


    const handleClick = () => {
        console.log("clicked")
    }

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        // Top navbar hidden when mobile
        <div>
            <div   style={{ backgroundColor: `${color}` }} className={style}>
                <div className="flex justify-between items-center w-full px-3 2xl:px-16">
                    <Image alt='' src={logoToggle} width='120' height='100' />
                    <ul style={{ color: `${textColor}` }}  className='hidden tracking-widest md:flex'>
                        <Link href='/'>
                            <li className="ml-10 text-sm b  uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Work</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className={iconToggle}>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            {/* sliding navbar from left to right */}
            <div className={nav ? "fixed md:hidden left-0 top-0 w-full h-screen bg-black/70" : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[0%] md:w-[45%] h-screen bg-gradient-to-r from-[#000000] to-black/30 p-10 ease-in-out duration-500 ' : 'fixed left-[-150%]  top-0 p-10 ease-in duration-500 '}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image alt='' src='/logo.svg' width='75' height='75' />
                            <div onClick={handleNav} className='hover:scale-105 ease-in duration-300 border-2 p-2 rounded-xl cursor-pointer shadow-xl shadow-gray-800'>
                                <AiOutlineClose size={25} />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4 '>
                            <p className='tracking-widest w-[85%] md:w-[90%] py-4'>Building the future one line of code at a time.</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase '>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Work</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='tracking-widest uppercase text-[#56f1d8]'>Let's connect</p>
                            <div className='flex text-xl sm:text-3xl items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full  shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full  shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full  shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full  shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsPersonLinesFill />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* side tag for links hidden when mobile */}
            <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
                <ul >
                    <li className='p-4 border-spacing-2 border-white border rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black/30'>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className=' flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/stephen-talley-the-developer/'
                        >
                            Linkedin <FaLinkedinIn size={30} />
                        </a>
                    </li>
                    <li className='p-4 border-spacing-2 border-white border rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black/30'>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/stvlley'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='p-4 border-spacing-2 border-white border rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black/30'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'

                        >
                            Email

                            <AiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='p-4 border-spacing-2 border-white border rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black/30'>
                    <a
            target="_blank"
            rel="noopener noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1dqgJ1e0UvCjaWArJFzxDVN38qDSvMZwx/view?usp=sharing'
            >
              Resume <BsPersonLinesFill size={30} />
            </a>
                    </li>

                </ul>
            </div>




        </div>
    )
}

export default Navbar