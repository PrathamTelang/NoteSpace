import React from 'react'

function Footer() {
  return (
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
  )
}

export default Footer