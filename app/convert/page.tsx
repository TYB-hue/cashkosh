'use client';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '../components/footer'

const Convert: React.FC = () => {
  const [selected, setSelected] = useState<string>('');
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  const handleNextClick = () => {
    if (selected === 'option1') {
      window.location.href = 'https://example.com/page1'; // Replace with the full URL for option 1
    } else if (selected === 'option2') {
      window.location.href = 'https://example.com/page2'; // Replace with the full URL for option 2
    } else {
      alert('Please select an option before proceeding.');
    }
  };

  return (
    <div className='mx-3  flex flex-col bg-gray-200 h-screen'>
      <h1 className='pl-10 font-bold text-2xl pt-7'>Choose One Of These Options :-</h1>
      <div className='pt-28 pb-20 items-center flex flex-col'>
     
      <label className=' bg-gray-400 p-2 rounded-10'>
        <input
          type="checkbox"
          value="option1"
          checked={selected === 'option1'}
          onChange={handleChange}
          className=''
        />
       
     USD {'>'} SDG (Sell)
     <p>transfare from usd to sdg</p>
      </label>
 
      <br/>
      <label className=" bg-gray-400 p-2 rounded-10">
        <input
          type="checkbox"
          value="option2"
          checked={selected === 'option2'}
          onChange={handleChange}
        />
        SDG {'>'} USD (Buy)
        <p>transfare from sdg to usd</p>
      </label>
    </div>
      <button onClick={handleNextClick} className='w-32 h-12 mb-52 self-center rounded-md bg-sky-500 text-white font-semibold hover:bg-white hover:text-sky-500 border-2 border-sky-500 duration-300 '>Next</button>
     
      <Footer />
    </div>
  );
};

export default Convert;
