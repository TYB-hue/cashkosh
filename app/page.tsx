import React from 'react';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <section className='px-6 md:px-20 py-12'>
        {/* Flex row on large screens, flex column on medium and smaller screens */}
        <div className='flex flex-col lg:flex-row w-full'>
          <div className='flex flex-col justify-center'>
            <p className='text-sm text-sky-500 flex'>
              Transfare Your Money Internationaly:
              <MdOutlineArrowRightAlt className='right-arrow mb-4 text-3xl' />
            </p>
            <h1 className='head-text max-lg:text-center'>
              Unleash The Power Of<br />
              Cash<span className='text-sky-500'>Kosh</span>
            </h1>
            <p className='mt-6'>
              Trade USD easily - buy and sell using your preferred payment methods.
            </p>
          </div>

          {/* Image with responsive behavior */}
            <div className='cycle-con max-lg:hidden'>
            <Image
            src='/tl.png'
            width='500'
            height='500'
            alt=''
            className='cycle transform -scale-x-100'/>
          <div className="relative w-64 h-64 animate-rotate-slow ml-32 mt-14 ">
            <Image
              src="/biglogo.png"
              alt="Big Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          </div>
        </div>
      </section>
      <div className='max-lg:ml-28 max-lg:mb-24 ml-32 '>
     
      <Link href='/convert'><button className='dialog-btn max-lg:left-44'>Get Start</button></Link>
      </div>
      {/* Custom CSS */}
    
    </>
  );
};

export default page;


// relative w-64 h-64 animate-rotate-slow

// animate-rotate-slow

//<Link href='/convert'><button>Convert</button></Link>
//<Link href='/convert'><button className='dialog-btn pl-11'>Charts</button></Link>