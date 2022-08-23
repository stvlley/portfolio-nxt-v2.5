import React, { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'
import {AiFillHome} from 'react-icons/ai'
import Head from 'next/head'
import {useRouter} from 'next/router'
function ProjectDetails() {
    const router = useRouter()
    const [gif, setGif] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])




    return (
        <div>{
            loading ?
                <div className='bg-gradient-to-r w-full h-screen from-[#5d95cc] to-[#6ddbc0]'>
                    <HashLoader
                        style={{}}
                        color="#03fcdb"
                        loading={loading}
                        size={150}
                        speedMultiplier={1}
                    />
                </ div>

                :
                <>
                <Head>
                    <title>Project Details</title>
                </Head>
                <div className='bg-black/30 flex justify-between items-center px-4'>
                    <img src='/logo.svg' alt='' style={{height: '100px', width: '100px'}}/>
                    <div onClick={() => router.push('/')} className='cursor-pointer text-white p-3 px-10 text-5xl'>
                        <AiFillHome />
                    </div>
                </div>
                
                    <div id='px-6 project-details' className='w-full h-screen lg:h-screen sm:px-20 '>
                    <div className=' px-3 max-w-[1240px] uppercase  m-auto  py-8 w-full'>

                        <p className='text-2xl md:text-4xl tracking-widest'>
                            project name
                        </p>
                        <h2 className='py-4 font-light text-2xl text-gray-300 tracking-widest invisible sm:visible'>
                            what kind of app
                        </h2>
                        <div className='grid lg:grid-cols-5 gap-8'>
                            {/* left */}
                            <div className='flex col-span-3 bg-black/30 border border-white lg:col-span-2 w-full shadow-xl rounded-lg p-4'>
                                <div className='lg:p-4 w-full'>
                                    <div className='rounded-lg hover:scale-105 ease-in duration-300'>
                                        text describing application/
                                        text describing application/
                                        text describing application/
                                        text describing application/
                                        text describing application/
                                        text describing application/
                                        text describing application/
                                        text describing application/
                                        text describing application/
                                        text describing application/
                                        text describing application/
                                        text describing application/
                                        text describing application/
                                        text describing application/
                                        text describing application/
                                    </div>


                                </div>
                            </div>
                            {/* right */}
                            <div className='col-span-3 w-full h-auto shadow-lg rounded-lg pb-10 bg-black/30 border border-white uppercase  tracking-widest font-extralight lg:p-4'>
                                <div className='p-4'>
                                    <img style={{ height: '300px', width: '500px' }} src="/logo.svg" alt="" />
                                    <p>picture of landing page</p>
                                </div>
                            </div>

                        </div>
                        <div className='grid lg:grid-cols-5 mt-6 gap-8'>
                            {/* left */}
                            <div className='flex col-span-3 bg-black/30 border border-white lg:col-span-2 w-full shadow-xl rounded-lg p-4'>
                                <div className='lg:p-4f-full'>
                                    <div className='rounded-lg hover:scale-105 ease-in duration-300'>
                                        tech stack svg's
                                    </div>


                                </div>
                            </div>
                            {/* right */}
                            <div className='col-span-3 w-full h-auto shadow-lg rounded-lg pb-10 bg-black/30 border border-white uppercase  tracking-widest font-extralight lg:p-4'>
                                <div className='p-4'>
                                    dynamic gif of project quick demo
                                    <img className='rounded-lg' src="/eastco.gif" alt="" />

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                </>
                }
            </div>
    )
}

export default ProjectDetails