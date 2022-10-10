import React, { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners'
import Login from '/Users/stvlley/portfolio-nxt-v2.5/components/Login.jsx'


function Admin() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    
    return (
       <>{
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

<div className='bg-black/30'>
<Login />
    </div>
       }</>
    )
}

export default Admin