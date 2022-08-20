import Image from 'next/image'
import React from 'react'

const Skills = () => {
    return (
        <div className='w-full h-[400px] p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='uppercase tracking-widest text-xl'>Skills</p>
                <div className='gird md:grid-cols-2 lg;grid-ols-4 gap 8'>
                    <div className='p-6 rounded hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-4 md:grid-cols-4 gap-4 justify-center items-center'>
                            <div className="shadow-lg shadow-black m-auto bg-black/30 p-3 rounded-lg border border-white">
                                <Image alt='' src='/html.svg' width='120' height='100' />

                            </div>
                            <div className="shadow-lg shadow-black m-auto bg-black/30 p-3 rounded-lg border border-white">
                                <Image alt='' src='/css.svg' width='120' height='100' />

                            </div>
                            <div className="m-auto shadow-lg shadow-black bg-black/30 p-3 rounded-lg border border-white">
                                <Image alt='' src='/javascript.svg' width='120' height='100' />

                            </div>
                            <div className="m-auto shadow-lg shadow-black bg-black/30 p-3 rounded-lg border border-white">
                                <Image alt='' src='/react-light.svg' width='120' height='100' />

                            </div>
                            <div className="m-auto shadow-lg shadow-black bg-black/30 p-3 rounded-lg border border-white">
                                <Image alt='' src='/rails.svg' width='120' height='100' />

                            </div>
                            <div className="m-auto shadow-lg shadow-black bg-black/30 p-3 rounded-lg border border-white">
                                <Image alt='' src='/nextjs-light.svg' width='120' height='100' />

                            </div>
                            <div className="m-auto shadow-lg shadow-black bg-black/30 p-3 rounded-lg border border-white">
                                <Image alt='' src='/tailwindcss-light.svg' width='120' height='100' />

                            </div>
                            <div className="m-auto shadow-lg shadow-black bg-black/30 p-3 rounded-lg border border-white">
                                <Image alt='' src='/python-light.svg' width='120' height='100' />

                            </div>
                          
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills