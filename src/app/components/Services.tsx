'use client';
import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <main className='screen-max-width'>
      <div className='mt-10 border'></div>
      <div>
        <div className='flex items-center justify-center w-full mt-10 mb-5'>
          <h1 className='px-2 text-xl font-semibold text-gray-600 border-l-[4px] border-[#504e4d]'>
            Our Services
          </h1>
        </div>
        <div className='flex flex-col mb-5'>
          <h1 className='mx-auto text-xl font-bold text-center md:text-2xl'>
            We Provide Special Building Services
          </h1>
          <p className='px-5 mx-auto mt-5 y'>
            PT. Inko Jaya Konstruksi provides all construction services. Especially we have 36 years of know-how in the factory construction.
          </p>
        </div>
        <ServicesCard />
      </div>
    </main>
  )
}

export default Services
