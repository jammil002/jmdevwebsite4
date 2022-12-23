import React from 'react'
import Image from 'next/image'
import jmdev4 from 'public/jmdev4.svg'

const Navbar = () => {
  return (
    <div className='min-h-screen p-4'>
        <nav className='text-blue-300'>
            <Image src={jmdev4} alt='jmdev logo' height={150} width={150} priority/> 
            <ul>
             <li><a href='#'>About</a></li>
             <li><a href='#'>Contact</a></li>
             <li><a href='#'>Blog</a></li>   
             <li><a href='#'>Resume</a></li> 
            </ul>
        </nav>
    </div> 
  )
}

export default Navbar