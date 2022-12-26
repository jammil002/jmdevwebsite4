import React from 'react'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import jmdev4 from 'public/jmdev4.1.webp'


const Navbar = () => {
  return (
    <div>
        <nav className='text-white flex justify-between'>
            <Image src={jmdev4} alt='jmdev logo' height={150} width={150} priority/> 
            <ul className='flex items-center'> 
             <li><a href='../public/resume.pdf' className='bg-slate-100 text-black border rounded-md px-2 ml-4 mr-4'>Resume</a></li>
             <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li> 
            </ul>
        </nav>
    </div> 
  )
}

export default Navbar