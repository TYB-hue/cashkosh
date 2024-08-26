





import React from 'react';
import Head from 'next/head';
import Footer from '../components/footer'

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | CashKosh</title>
        <meta
          name="description"
          content="Learn more about CashKosh, a small company dedicated to providing reliable international money transfer services."
        />
      </Head>
      <div className="flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About CashKosh</h1>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
          At CashKosh, we are committed to making international money transfers simple, fast, and secure. As a small company, we focus on providing personalized service to our customers, ensuring that their needs are met with efficiency and transparency.
        </p>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
          Our mission is to bridge the gap between you and your loved ones, no matter where they are in the world. With CashKosh, you can send money internationally with confidence, knowing that your transfer is in safe hands. We believe in transparency and honesty, which is why we offer competitive rates and clear fees with no hidden charges.
        </p>
        <p className="text-lg text-gray-600 text-center max-w-2xl">
          Founded on the principles of trust and reliability, CashKosh is here to support you in all your financial endeavors. Whether you are sending money for personal reasons or business purposes, our team is ready to assist you every step of the way.
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default About;











































// "use client"

// import { scrapeAndStoreProduct } from '../../lib/action';
// import { FormEvent, useState } from 'react'

// const isValidAmazonProductURL = (url: string) => {
//   try {
//     const parsedURL = new URL(url);
//     const hostname = parsedURL.hostname;

//     if(
//       hostname.includes('amazon.com') || 
//       hostname.includes ('amazon.') || 
//       hostname.endsWith('amazon')
//     ) {
//       return true;
//     }
//   } catch (error) {
//     return false;
//   }

//   return false;
// }

// const Searchbar = () => {
//   const [searchPrompt, setSearchPrompt] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const isValidLink = isValidAmazonProductURL(searchPrompt);

//     if(!isValidLink) return alert('Please provide a valid Amazon link')

//     try {
//       setIsLoading(true);

//       // Scrape the product page
//       const product = await scrapeAndStoreProduct(searchPrompt);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <form 
//       className="flex flex-wrap gap-4 mt-12" 
//       onSubmit={handleSubmit}
//     >
//       <input 
//         type="text"
//         value={searchPrompt}
//         onChange={(e) => setSearchPrompt(e.target.value)}
//         placeholder="Enter product link"
//         className="searchbar-input"
//       />

//       <button 
//         type="submit" 
//         className="searchbar-btn"
//         disabled={searchPrompt === ''}
//       >
//         {isLoading ? 'Searching...' : 'Search'}
//       </button>
//     </form>
//   )
// }

// export default Searchbar