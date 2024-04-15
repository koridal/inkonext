import Link from 'next/link'
import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='max-w-screen-xl mx-auto sm:mt-10 '>
      <div className=' mb-20 bg-[#f5f5f5]  items-center px-10 py-8 rounded-xl mx-4 xl:mx-0'>
        <div className='grid grid-cols-2 lg:grid-cols-4 justify-center gap-6 text-sm '>
          <div className=''>
            <div className=''>
              <h3 className='border-l-yellow-400 border-l-[4px] mb-4'>&nbsp;&nbsp;About Us</h3>
              <p className='mb-4 px-3'>Welcome to PT. Inko Jaya Konstruksi <br/>IJK Building Your Dream Since 1988.</p>
              <div className='flex gap-2 mb-4 px-3'>
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
            </div>
          </div>
          <div className=''>
            <div className=''>
              <h3 className='border-l-yellow-400 border-l-[4px] mb-4'>&nbsp;&nbsp;Our Service</h3>
              <ul className='px-3'>
                <li><a href='service-details.html'>Urban Infrastructure</a></li>
                <li><a href='service-details.html'>Road Infrastructure</a></li>
                <li><a href='service-details.html'>Industrial Infrastructure</a></li>
                <li><a href='service-details.html'>Construction Engineering</a></li>
              </ul>
            </div>
          </div>
          <div className=''>
            <div className=''>
              <h3 className='border-l-yellow-400 border-l-[4px] mb-4'>&nbsp;&nbsp;Quick Links</h3>
              <ul className='px-3 mb-4'>
                <li><a href='faq.html'>FAQ</a></li>
                <li><a href='service.html'>Services</a></li>
                <li><a href='team.html'>Team</a></li>
                <li><a href='privacy.html'>Privacy &amp; Policy</a></li>
                <li><a href='terms.html'>Terms &amp; Conditions</a></li>
                <li><a href='contact.html'>Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className=''>
            <div className=''>
              <h3 className='border-l-yellow-400 border-l-[4px] mb-4'>&nbsp;&nbsp;Contacts</h3>
              <ul className='px-3'>
                <li>+62 2182631843</li>
                <li>+62 2182631845</li>
                <li>ysi@ysindonesia.com</li>
                <li className='text-xs'>17151 Jl. Tengah No.55, Bantargebang, Kota Bks, Jawa Barat</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className='text-sm px-3'>Copyright @2024 All Rights Reserved by IJK</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer