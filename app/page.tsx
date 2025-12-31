import Link from 'next/link'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'

function page() {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* hero section */}
      <Hero />
      {/* footer */}
      <Footer/>
    </div>
  )
}

export default page