import React from 'react'
import {IoLogoInstagram, IoLogoLinkedin} from 'react-icons/io'
import Image from 'next/image'

const Centerpiece = () => {
  return (
    <div className=' text-white'>
        <div className='text-center p-7'>
            <h2 className='text-5xl py-2 font-medium'>James Miller</h2>
            <h3 className='text-2xl py-2'>Wannabe Front End Developer</h3>
            <p className='py-5 leading-relaxed'>Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt exercitationem ipsam labore. Mollitia numquam accusamus deserunt, tenetur officia doloribus nesciunt, aliquid odio vel repellendus, ipsum reiciendis nulla ducimus! Ipsa!</p>
        </div>
        <div className='text-5xl flex justify-center gap-8  text-[#a06cd5]'>
        <IoLogoInstagram className='t'/>
        <IoLogoLinkedin/>
        </div>

    </div>
  )
}

export default Centerpiece