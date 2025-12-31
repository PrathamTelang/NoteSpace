import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
      <div className="flex justify-between items-center  sm:py-4 sm:mx-40 py-3 px-4  bg-white/50 bg-blur sticky top-4 z-50 rounded-lg shadow-md shadow-gray-300">
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
      </div>

  )
}

export default Navbar