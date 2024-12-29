import React from 'react';
import FrameComponent from '../../components/frame-component';
import PrivacyPolicy from '../../components/terms/PrivacyPolicy';
import Terms from '../../components/terms/Terms';
import RefundPolicy from '../../components/terms/CancellationAndRefund';
import ShippingPolicy from '../../components/terms/Shipping';
import BusinessPolicy from '../../components/terms/BusinessPolicy';

const TermsPage = () => {
  return (
    <div className="">
      <FrameComponent />
      <div className="min-h-screen max-w-7xl mx-auto py-8 mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Terms and Conditions Section */}
          <Terms />
          {/* Business Policy Framework Section */}
          <BusinessPolicy />
        </div>
      </div>
    </div>
  );
};

export default TermsPage;