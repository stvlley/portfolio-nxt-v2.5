import React, { useState, useEffect } from 'react'
import Article from './Article'
import Image from 'next/image'



const Published = () => {

    const [posts, setPosts] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@stephentalleyjr')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.items)
                setLoading(false)
            })
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!posts) return <p>No profile data</p>

    console.log(posts)

    const image = posts.map(blog =>  <Image key={blog.title} alt='' src={blog.thumbnail} width={300} height={300} />)

    

    return (
        <div className='w-full h-screen px-10 md:pt-16 md:h-[800px] mt-16 md:mt-36 xl:mt-60 p-10 sm:px-32  py-40  uppercase text-light items-center text-center'>
        <p className=' p-3 tracking-widest py-6 text-xl md:text-4xl'>some recent blogs</p>
        <div className=' h-[800px] md:h-[400px] justify-center items-center '>

          {posts?.map((post) => <Article className='' post={post} key={post.title}/>)}

  
        </div>
      </div>
    )
}

export default Published