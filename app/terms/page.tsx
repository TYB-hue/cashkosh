// pages/terms-of-service.tsx
import React from 'react';
import Footer from '../components/footer';

const TermsOfService: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-4">
          These Terms of Service ("Terms") govern your use of the CashKosh website and services.
        </p>
        <p className="mb-4">
        By accessing or using any website with an authorized link to this Agreement (each a "Website"), accessing or using any application with an authorized link to this Agreement (“App,” together with the Websites, the “Properties”), registering an account, or accessing or using any content, information, services, features or resources available or enabled via the Properties (collectively with the Properties, the "Services"), or clicking on a button or taking another action to signify your acceptance of this Agreement, you: (1) agree to be bound by this Agreement and any future amendments and additions to this Agreement as published through the Services; (2) represent you are of legal age in your jurisdiction of residence to form a binding contract; and (3) represent that you have the authority to enter into this Agreement personally and, if applicable, on behalf of any company, organization or other legal entity on whose behalf you use the Services.  Except as otherwise provided herein, if you do not agree to be bound by this Agreement you may not access or use the Services.

Your use of the Services is also subject to any additional terms, terms of use, conditions and policies that we separately post on the Services ("Supplemental Terms") which are incorporated by reference into this Agreement.  Some of the specialized features and tools accessible through our Services are provided by third-party companies pursuant to their own separate terms of service (“Third-Party Terms”) that differ from ours.  By using such third-party features and tools, you agree that your relationships with the third-party service providers will be governed by the applicable Third-Party Terms.

Subject to Section 5.9 of this Agreement, the Company reserves the right to modify this Agreement or its policies relating to the Services at any time, effective upon posting of an updated version of this Agreement or any applicable Supplemental Terms on the applicable Services.  You should regularly review this Agreement.  Your continued use of the Services after any such changes constitutes your agreement to such changes.
        </p>
      </div>
      <div className='h-8'></div>
      <Footer/>
      </>
  );
};

export default TermsOfService;
