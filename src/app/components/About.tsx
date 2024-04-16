'use client';
import AboutImg from "/images/about-img.jpg"
import Image from 'next/image'

const About = () => {
  return (
    <main className='max-w-screen-xl mx-auto mb-20'>
      <div className='mt-10 border '></div>
      <div>
        <div className='flex items-center justify-center w-full mt-10 mb-10'>
          <h1 className='px-2 text-xl font-semibold text-gray-600 border-l-[4px] border-[#504e4d]'>
            Welcome to PT. Inko Jaya Konstruksi
          </h1>
        </div>
        <div className='flex flex-col md:gap-4 md:flex-row'>
          <Image 
            src='/images/about-img.jpg' alt='About'
            width={500} height={330}
            style={{ width: '100%', height: '100%' }}
            priority={false}
            className='mx-5 rounded-lg md:items-center'/>
          <div className="flex flex-col">
            <h1 className='text-xl font-bold text-center md:text-2xl mt-5'>
              IJK Building Your Dream Since 1988 
            </h1>
            <p className='p-5 text-justify'>
              <strong className='text-lg tracking-tight'>PT. INKO JAYA KONSTRUKSI</strong> separated and became independent of the construction sector in March 2020 in line with the trend of demanding more expertise from PT. YUNSUNG, who has led the development of machinery and factory construction in Indonesia for 36 years, and has always achieved successful results since its launch.<br /><br/>
              In the future, we will do our best not only for prompt and accurate delivery but also for follow-up management.
              In addition, I will always strive to become a leader in the machinery industry in the future through constant challenges and also to become a company that fulfills its responsibilities as a social enterprise.
            </p>
            <button className='px-6 mx-auto border rounded-full shadow-md text-md'>
              More Detail
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About