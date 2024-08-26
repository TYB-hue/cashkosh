// components/Footer.tsx
import React from 'react';
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-500 text-white py-8 mb-0 mt-8 b-0">
      <div className="container mx-auto flex flex-col items-center">
      <Image src="/footerlll.png" alt="CashKosh Logo" width={80} height={50} className="mb-4" />
        <p className="text-center mb-4">
          &copy; {new Date().getFullYear()} CashKosh. All rights reserved.
        </p>
        <ul className="flex space-x-4">
          <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          <li><a href="mailto:cashkosh2024@gmail.com" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
