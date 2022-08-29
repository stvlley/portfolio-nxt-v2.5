import Image from 'next/image'
import React from 'react'

const Article = ({ post, image }) => {
    return (
        <div className='hover:bg-gradient-to-r from-[#1a73b6] to-[#08a883] m-6 border border-white  rounded-lg bg-black/20  gap-2 p-3'>
            <a target="_blank"
                rel="noopener noreferrer" 
                href={post.link}>
                <h2 className='uppercase text-xs md:text-2xl tracking-widest font-light'>{post.title}
                </h2>
            </a>

        </div>
    )
}

export default Article