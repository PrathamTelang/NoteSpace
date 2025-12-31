import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className=''>
            <div className=' shadow-xl shadow-gray-400 rounded-2xl sm:w-96 w-72 p-6 flex flex-col gap-4'>
            <div className='w-full flex justify-center items-center text-xl font-bold'>
                Log in
            </div>
            <div className='w-full flex justify-center items-center text-sm text-gray-500'>
                Welcome back! Please sign in to continue
            </div>
            <div>
                <p className='text-gray-500 text-sm'>Email</p>
                <input type="email" placeholder='Enter your email address' className='shadow text-sm shadow-gray-300 my-2 p-1 rounded w-full  focus:outline-none
    focus:ring-2
    focus:ring-gray-300 pl-2'/>
            </div>
            <div>
                <p className='text-gray-500 text-sm'>Password</p>
                <input type="password" placeholder='Enter your password' className='shadow text-sm shadow-gray-300 my-2 p-1 rounded w-full  focus:outline-none
    focus:ring-2
    focus:ring-gray-300 pl-2'/>
            </div>
            <div>
                <button className='border p-1 pb-2 w-full bg-[#37383F] text-white rounded-lg cursor-pointer text-sm hover:bg-neutral-600'>Log in</button>
            </div>
            <div className="w-full flex justify-center items-center text-sm text-gray-500">
  Don't have an account?
  <Link href="/register" className="hover:underline pl-1">
    Register
  </Link>
</div>
        </div>
        </div>
    </div>
  )
}

export default page