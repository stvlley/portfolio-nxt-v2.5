import React, { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners'



function Admin() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])


    return (
        <div className='w-full h-screen text-center bg-black/20'>
            {loading ?
                <div className='bg-gradient-to-r w-full h-screen from-[#5d95cc] to-[#6ddbc0]'>
                    <HashLoader
                        style={{}}
                        color="#03fcdb"
                        loading={loading}
                        size={150}
                        speedMultiplier={1}
                    />
                </ div> :
                <>
                    <h1 className='tracking-widest uppercase fint-light'>Welcome, Daddy</h1>
                </>

            }
        </div>
    )
}

export default Admin