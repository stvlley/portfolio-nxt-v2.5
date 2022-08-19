import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div>
        <div className="fixed w-full h-30 shadow-xl ">
            <div className="flex justify-between items-center w-full px-3 2xl:px-16">
                <Image alt='' src='/logo.svg' width='120' height='100'/>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
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
                <div className=' md:hidden px-3'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
            <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
                <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-r from-[#000000] to-transparent p-10 ease-in-out duration-500 '>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image alt='' src='/logo.svg' width='75' height='75' />
                            <div className='border-2 p-2 rounded-xl cursor-pointer shadow-xl shadow-gray-800'>
                                <AiOutlineClose size={25}/>
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4 '>
                            <p className='w-[85%] md:w-[90%] py-4'>Building the future one line of code at a time.</p>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        <div>

        </div>
    </div>
  )
}

export default Navbar