import React from 'react'
import Logo from './Logo';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const navigation = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/About' },
    { title: 'Services', href: '/Services' },
    { title: 'Projects', href: '/Projects' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <div className='w-full h-20 bg-[#504e4d] shadow-md'>
      <div className='max-w-screen-xl h-full mx-auto flex px-4 xl:px-0    
      items-center justify-between'>
        <Logo 
          title='Inko Jaya Konstruksi' 
          className='text-white tracking-tight' 
        />
        <div className='hidden md:inline-flex items-center gap-7 text-gray-300 hover:text-white duration-200'>
          {navigation.map((item) => (
            <Link
              key={item?.title} href={item?.href}
              className='text-sm uppercase font-semibold relative group overflow-hidden'
            >
              {item?.title}
              <span className='w-full h-[2px] bg-white absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200' />
            </Link>
          ))}
        </div>
        <div className='bg-white rounded-full px-4 py-1 '>
          <p className='text-sm font-semibold cursor-pointer'>Get Appointment</p>
        </div>
        <div className='md:hidden'>
          <FiMenu  className='text-3xl stroke-white'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar