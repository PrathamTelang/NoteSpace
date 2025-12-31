import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
{/* header */}
      <header className="flex justify-between items-center  sm:py-4 sm:mx-40 py-3 px-4  bg-white/50 bg-blur sticky top-4 z-50 rounded-lg shadow-md shadow-gray-300">
        <h1 className="text-xl font-bold">BCRUD</h1>
        <div className='flex gap-2'>
          <Link
  href="/login"
  className="bg-[#F5F5F5] rounded px-4 py-1 border border-gray-300
             text-sm font-semibold hover:bg-gray-200
             flex items-center justify-center"
>
  Log in
</Link>

<Link
  href="/register"
  className="sm:mr-4 bg-[#143CFF] rounded px-4 py-1
             text-sm font-semibold text-white
             hover:bg-[#0f2ecc]
             flex items-center justify-center"
>
  Register
</Link>
        </div>
      </header>

      <div className='min-h-screen'>
      {/* main content */}
      <main className="p-4 pt-40 w-screen flex flex-col justify-center items-center">
        <div className='flex'>
          <div className="sm:text-[12rem] text-8xl font-bold text-[#143CFF] text-shadow-sm">Your</div>
        <div className='flex flex-col justify-center items-center font-bold sm:text-7xl text-3xl mt-6'>
          <div>Notes</div>
          <div>Space</div>
        </div>
        </div>
        <div className='sm:text-xl text-md font-semibold sm:w-full flex justify-center items-center w-4/5'>
          Write, save, and organize notes effortlessly—whether it’s a quick thought, a to-do list, or your next big idea.
        </div>
        <div className='pt-10'>
          <button className="mt-6 bg-[#143CFF] rounded px-6 py-2 text-lg font-semibold text-white hover:bg-[#0f2ecc] cursor-pointer"><a href="/register ">Get Started</a></button>
        </div>
      </main>
      </div>

      {/* footer */}
      <div className='w-full min-h-screen flex flex-col justify-center sm:pl-72 pl-10 bg-[#143CFF] text-[#8A9EFF] text-sm'>
       <p className='py-4'>
        © 2024 BCRUD. All rights reserved.
       </p>
        <div>
          <p className='text-white underline cursor-pointer py-1'>Privacy Policy</p>
      <p className='text-white underline cursor-pointer py-1'>Terms of Service</p>
      <p className='text-white underline cursor-pointer py-1'>Contact Us</p>
        </div>
      </div>
    </div>
  )
}

export default page