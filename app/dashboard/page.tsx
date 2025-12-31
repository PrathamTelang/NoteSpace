import Link from 'next/link';
import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

function page() {
  return (
    <div>
        {/* header */}
      <header className="flex justify-between items-center  sm:py-4  py-3 px-4  bg-white/50 bg-blur sticky top-4 z-50">
        <h1 className="text-xl font-bold">BCRUD</h1>
        <div className='flex gap-2'>
          <Link
  href="/login"
  className="bg-[#F5F5F5] rounded px-4 py-1 border border-gray-300
             text-sm font-semibold hover:bg-gray-200
             flex justify-center items-center gap-2"
>
  <IoIosAddCircleOutline />
  Add Task
</Link>
        </div>
      </header>
    </div>
  )
}

export default page