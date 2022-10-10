import React from 'react'
import Link from 'next/link'
export default function Login() {
  return (
    <div className=''>
      <div className='w-full h-screen text-center '>
        
     
     <section className="flex justify-center items-center h-screen bg-gradient-to-r from-green-300 to-blue-400">
         <div className="max-w-md w-full bg-black/30 outline rounded-xl p-6 space-y-4">
             <div className="mb-4">
     
             </div>
             <div>
                 <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Email" />
             </div>
             <div>
                 <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Password" />
             </div>
             <div>
                 <button className="outline w-full cursor-pointer py-4 bg-[#3ed6b5] hover:bg-blue-500 rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
             </div>
             <div className="flex items-center justify-between">
                 <div className="cursor-pointer p-3 hover:bg-black/30 rounded-lg hover:outline uppercase tracking-widest flex flex-row items-center">
                 <Link href='/' >back</Link>
                 </div>
                 <div>
                     <a className="text-sm cursor-pointer hover:text-blue-300 transition duration-200 text-[#3ed6b5] hover:underline uppercase tracking-widest" href="#">Forgot password</a>
                 </div>
             </div>
         </div>
     </section>
             </div>
    </div>
  )
}
