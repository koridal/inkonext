import Link from 'next/link'
import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { IoIosPin, IoMdStopwatch } from 'react-icons/io'

const Social = () => {
  return (
    <div className='max-w-screen-xl mx-auto flex justify-between items-center text-gray-500 '>
      <div className='flex gap-2 px-4'>
        <Link  href='http://www.facebook.com' target='_blank'>
          <AiFillFacebook size={24} />
        </Link>
        <Link  href='http://www.twitter.com' target='_blank'>
          <AiFillTwitterCircle size={24} />
        </Link>
        <Link  href='http://www.instagram.com/tristan_bin' target='_blank'>
          <AiFillInstagram size={24} />
        </Link>
      </div>
      <div className='hidden md:flex md:px-6 text-sm h-10 gap-6'>
        <div className='flex items-center gap-1'>
          <IoMdStopwatch />
          <p>MON - FRI (09:00 - 17:00)</p>
        </div>
        <div className='flex items-center gap-1'>
          <IoIosPin />
          <p>Jl. Tengah No.55, Bantargebang, Kota Bks, Jawa Barat 17151</p>
        </div>
      </div>
    </div>
  )
}

export default Social