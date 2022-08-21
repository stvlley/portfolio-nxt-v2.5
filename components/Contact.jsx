import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
const Contact = () => {
    return (
        <div className='w-full lg:h-screen bg-black/30'>
            <div className=' px-3 max-w-[1240px] uppercase  m-auto  py-32 w-full'>

                <p className='text-2xl md:text-4xl tracking-widest'>
                    Contact
                </p>
                <h2 className='py-4 font-light text-2xl text-gray-300 tracking-widest invisible sm:visible'>
                    Get In Touch
                </h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='hidden sm:flex col-span-3 bg-black/30 border border-white lg:col-span-2 w-full shadow-xl rounded-lg p-4'>
                        <div className='lg:p-4f-full'>
                            <div className='rounded-lg hover:scale-105 ease-in duration-300'>
                                <img src="/logo.svg" alt="" />
                            </div>
                            <div>
                                <h2 className='font-light  tracking-widest py-4'>
                                    Stephen Talley
                                </h2>
                                <p className='font-bold tracking-widest px-4'>Fullstack Web Developer</p>
                            </div>

                        </div>
                    </div>
                    {/* right */}
                    <div>

                    </div>
                    <div className='col-span-3 bg-black/30 border border-white  lg:col-span-2 w-full shadow-xl rounded-lg p-4'>
                        <div name='contact' className='  flex justify-center items-center p-4'>
                            <form method='POST' action="https://getform.io/f/5a5684bd-7fac-46f2-937c-64325765e7ed" className='hover:scale-110 duration-500 rounded flex flex-col max-w-[600px] w-full'>
                              
                                <input className='rounded border border-white bg-black/20  p-2' type="text" placeholder='Name' name='name' />
                                <input className='rounded my-4 bg-black/20 border border-white p-2' type="email" placeholder='Email' name='email' />
                                <textarea className='rounded bg-black/20 border border-white p-2' name="message" rows="10" placeholder='Message'></textarea>
                                <button className='hover:scale-110 duration-500 rounded text-white border-2  px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
                            </form>
                        </div>
                    </div>
                    {/* bottom */}
                </div>
                <div className=' items-center justify-between py-4'>
                    <p className='uppercase tracking-widest text-center pt-8 '>Let's connect</p>
                    <div className='rounded-lg gap-3 items-center justify-center flex p-6 text-2xl cursor-pointer hover:scale-105 ease-in duration-300'>

                        <div className='rounded-lg border-white border  shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-lg border-white border   shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-lg border-white border  shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-lg border-white border   shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsPersonLinesFill />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact