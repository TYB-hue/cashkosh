// app/privacy-policy.tsx

import React from 'react';
import Footer from '../components/footer';

const PrivacyPolicy = () => {
  return (
    <>
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-sky-500 mb-8">Privacy & Policy</h1>
        
        <div className="bg-white p-6 shadow-md rounded-lg">
          <p className="text-gray-700 mb-4">
            Your privacy is important to us. It is CashKosh's policy to respect your privacy regarding any information we may collect from you across our website, CashKosh, and other sites we own and operate.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information directly from individuals, from third parties, and automatically through our website. The types of information that we collect include your name, email address, payment details, and other relevant information to provide our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">How We Use Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect primarily to provide, maintain, and improve our services, as well as to ensure the security of our platform. Additionally, we may use the information to communicate with you, understand your needs, and personalize your experience.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Data Security</h2>
          <p className="text-gray-700 mb-4">
            We take the security of your data seriously and implement various measures to ensure its protection. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Changes to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update our Privacy Policy from time to time. We encourage you to review this page periodically for any changes. Your continued use of our services after any modifications will constitute your acknowledgment of the modifications and your consent to abide by the new policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:cashkosh2024@gmail.com" className="text-blue-500 hover:underline">cashkosh2024@gmail.com</a>.
          </p>
        </div>
      </div>
      <div className=' h-16'></div>
    </div>
    <Footer />
    </>
    
  );
}

export default PrivacyPolicy;
