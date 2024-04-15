import React from 'react'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <main className='screen-max-width'>
      <div className='mt-10 border'></div>
      <div>
        <div className='flex items-center justify-center w-full mt-5 sm:mt-10 mb-5 sm:mb-10'>
          <h1 className='px-2 text-xl font-semibold text-gray-600 border-l-[4px] border-[#504e4d]'>
            Projects
          </h1>
        </div>
        <div className='flex flex-col mb-5'>
          <h1 className='mx-auto text-xl font-bold text-center md:text-2xl'>
            We will do our best always.
          </h1>
        </div>
        <ProjectsCard />
      </div>
    </main>
  )
}

export default Projects
