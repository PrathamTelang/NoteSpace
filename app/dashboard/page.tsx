"use client"
import React from 'react'
import Link from 'next/link'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'
import { BsLayoutSidebarReverse } from 'react-icons/bs'


function page() {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  
  return (
    <div className='flex'>
      {/* sidebar */}
       <div className={`h-screen w-72 border-r border-gray-200 flex flex-col justify-between fixed md:static bg-white z-50   transition-transform duration-300 ${
      sidebarOpen ? "translate-x-0" : "-translate-x-full"
    }
    md:translate-x-0`}>
        <div className='h-16 text-lg pl-4 font-semibold border-b border-gray-200 flex items-center justify-between'>
          <div>NoteSpace</div>
          <div
          onClick={() => {setSidebarOpen(!sidebarOpen)}} 
          className='pr-4 text-xl text-gray-600 cursor-pointer md:hidden'><BsLayoutSidebarReverse /></div>
          </div>
        

        <div className='flex flex-col'>
           {/* profile */}
      <div className='pl-4 pb-4'>
      <div className='font-semibold'>Profile</div>
        <div>John Doe</div>
        <div className='text-sm text-gray-500'>john.doe@example.com</div>
      </div>

      {/* logout */}
      <div className='flex gap-2 px-4 justify-end mb-4'>
          <Link
  href=""
  className="bg-[#F5F5F5] w-full rounded px-4 py-1 border border-gray-300
             text-sm font-semibold hover:bg-gray-200
             flex justify-center items-center "
>

  Logout
</Link>
        </div>
        </div>
       </div>

      <div className='w-full h-screen'>
        {/* header */}
      <header className="w-full flex justify-end items-center h-16 sticky   border-b border-gray-200">
        <div className='w-full flex justify-between'>
          <div className='flex justify-center items-center gap-2'>
            <div
          onClick={() => {setSidebarOpen(!sidebarOpen)}} 
          className='pl-4 text-xl text-gray-600 cursor-pointer md:hidden'><BsLayoutSidebarReverse />
          </div>
            <div className='sm:pl-4 text-lg font-bold'>Notes</div>
          </div>
          <div className='flex gap-2 pr-4'>
          <Link
  href=""
  className="bg-[#F5F5F5] rounded px-4 py-1 border border-gray-300
             text-sm font-semibold hover:bg-gray-200
             flex justify-center items-center gap-2 "
>
  <IoIosAddCircleOutline />
  Add Note
</Link>
        </div>
        </div>
      </header>

      {/* main content */}
      <main className='p-4 w-full'>
        {/* Your main content goes here */}
        <div className=''>
          <div className='border border-gray-200 rounded '>
            <div className='px-4 py-3 flex justify-between border-b border-gray-200 items-center'>
              <div>task 1</div>
              <MdDelete className='cursor-pointer text-2xl text-red-500' />
            </div>
            <div className='px-4 py-3 flex justify-between border-b border-gray-200 items-center'>
              <div>task 1</div>
              <MdDelete className='cursor-pointer text-2xl text-red-500' />
            </div>
            <div className='px-4 py-3 flex justify-between border-b border-gray-200 items-center'>
              <div>task 1</div>
              <MdDelete className='cursor-pointer text-2xl text-red-500' />
            </div>
          </div>
        </div>
      </main>
</div>
    </div>  
  )
}

export default page