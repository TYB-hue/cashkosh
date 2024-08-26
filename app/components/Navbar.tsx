import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { CgArrowsExchange } from "react-icons/cg";
import { IoPieChartSharp } from "react-icons/io5";


const Navbar = () => {

  
  
  

  return (
    <header className='w-full'>
      <nav className='nav'>
      <Link href='/' className='flex items-center gap-1'>
      <Image  src='/assets/icons/logo.png'
      width={31}
      height={31}
      alt='logo'/>
      <p className='nav-logo'>
        Cash<span className='text-sky-500'>Kosh</span>

      </p>
 </Link>


<div className='flex gap-6'>
<Link href='/convert'>
<h2 className=' hover:text-sky-500 duration-300 flex  font-bold'><CgArrowsExchange className='convert-icon text-3xl '/> Convert</h2>
</Link>

<Link href='/about'>
<h2 className=' hover:text-sky-500 transition duration-300 flex gap-1 font-bold'><IoPieChartSharp className='mt-1 '/>About</h2>
</Link>
</div>




      </nav>
    </header>
  )
}

export default Navbar
