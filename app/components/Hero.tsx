import React from 'react'

function Hero() {
  return (
    <div className='min-h-screen'>
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
  )
}

export default Hero