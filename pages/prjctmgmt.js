import React, { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'
import { AiFillHome } from 'react-icons/ai'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
function PrjctMgmt() {
    const router = useRouter()
    const [gif, setGif] = useState(null)
    const [size, setSize] = useState(50)
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
                        <link rel="icon" href="/logo.svg" />
                    </Head>
                    <div className='bg-black/30 flex justify-between items-center px-4'>
                        <Image src='/logo.svg' alt='' width={70} height={70}  />
                        <div onClick={() => router.push('/')} className='cursor-pointer text-white p-3 px-10 text-5xl'>
                            <AiFillHome />
                        </div>
                    </div>

                    <div id='px-6 project-details' className='w-full h-screen lg:h-screen sm:px-20 '>
                        <div className=' px-3 max-w-[1240px]  m-auto  py-8 w-full'>

                            <p className='uppercase text-2xl md:text-4xl tracking-widest'>
                                Prjct MGMT
                            </p>
                            <h2 className='uppercase py-4 font-light text-2xl text-gray-300 tracking-widest invisible sm:visible'>
                                React project management tool
                            </h2>
                            <div className='grid lg:grid-cols-5 gap-8'>
                                {/* left */}
                                <div className='flex col-span-3 bg-black/30 border border-white lg:col-span-2 w-full shadow-xl rounded-lg p-4'>
                                    <div className='lg:p-4 w-full'>
                                        <div className='rounded-lg hover:scale-105 ease-in duration-300'>
                                            <p className='tracking-widest font-light  md:text-4xl'>
                                                Prjct MGMT is a highly functional and simplified version of an enterprise level project management application. Created with CRA, TailwindCSS, GraphQL, and MongoDB.
                                            </p>
                                        </div>


                                    </div>
                                </div>
                                {/* right */}
                                <div className='col-span-3 w-full h-auto shadow-lg rounded-lg pb-10 bg-black/30 border border-white uppercase  tracking-widest font-extralight lg:p-4'>
                                    <div className='p-4 item-center text-center m-auto'>
                                        <Image width={350} height={350}  src="/alert.svg" alt="alert" />
                                        <p>landing page under construction</p>
                                    </div>
                                </div>

                            </div>
                            <div>
                                {/* left */}
                                <div >
                                    <div >
                                        <div className='uppercase'>
                                            <div className='w-full mb-5 text-xs md:text-sm text-white tracking-widest grid  sm:grid-cols-4 gap-4 text-center py-4'>
                                                <div className=' rounded-lg pt-3 bg-black/30 border border-white hover:scale-110 duration-500'>
                                                    <Image priority src='/react-light.svg' alt='' width={size} height={size} />
                                                    <p className='my-4'>React</p>
                                                </div>
                                                <div className=' rounded-lg pt-3 bg-black/30 border border-white hover:scale-110 duration-500'>
                                                    <Image priority src='/tailwindcss-light.svg' alt='' width={size} height={size} />
                                                    <p className='my-4'>TailwindCSS</p>
                                                </div>
                                                <div className=' rounded-lg pt-3 bg-black/30 border border-white hover:scale-110 duration-500'>
                                                    <Image priority src='/graphql-light.svg' alt='' width={size} height={size} />
                                                    <p className='my-4'>graphql</p>
                                                </div>
                                                <div className=' rounded-lg pt-3 bg-black/30 border border-white hover:scale-110 duration-500'>
                                                    <Image priority src='/mongodb.svg' alt='' width={size} height={size} />
                                                    <p className='my-4'>mongodb</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                {/* right */}
                                <div className='col-span-3 w-full h-auto shadow-lg rounded-lg pb-10 bg-black/30 border border-white uppercase  tracking-widest font-extralight lg:p-4'>
                                    <div className='p-4'>
                                        <Image width={1400} height={700}  className='rounded-lg' src="/prjctmgmt.gif" alt="" />

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

export default PrjctMgmt