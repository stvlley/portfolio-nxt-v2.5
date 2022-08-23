import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='w-full mt-20 lg:h-screen sm:px-20 pt-8 '>
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
                            <div className='tracking-widest text-gray-300 p-3 pt-5 '>
                                <h2>"building the future one line of code at a time."</h2>
                            </div>

                        </div>
                    </div>
                    {/* right */}
                    <div className='col-span-3 w-full h-auto shadow-lg rounded-lg pb-10 bg-black/30 border border-white uppercase  tracking-widest font-extralight lg:p-4'>
                        <div className='p-4'>
                            <form
                                action="https://getform.io/f/5a5684bd-7fac-46f2-937c-64325765e7ed"
                                method='POST'
                                encType='multipart/form-data'
                            >
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input
                                            className='border bg-black/30 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='name'
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>
                                            Phone Number
                                        </label>
                                        <input
                                            className='border bg-black/30 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='phone'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input
                                        className='border bg-black/30 rounded-lg p-3 flex border-gray-300'
                                        type='email'
                                        name='email'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input
                                        className='border bg-black/30 rounded-lg p-3 flex border-gray-300'
                                        type='text'
                                        name='subject'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea
                                        className='border bg-black/30 rounded-lg p-3 border-gray-300'
                                        rows='10'
                                        name='message'
                                    ></textarea>
                                </div>
                                <button className='border border-white w-full p-4 mt-4'>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* bottom */}
                </div>
       
            </div>
        </div>
    )
}

export default Contact

