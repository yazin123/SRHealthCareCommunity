import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">Effective Date: 27.12.2024</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to SR FIRST AID HEALTH CARE PVT LTD. We are committed to protecting the privacy and confidentiality of our clients, partners, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="text-gray-700">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>Personal Information: Name, email address, phone number, job title, and company details.</li>
            <li>Healthcare Data: Information relevant to hospital operations and healthcare consulting.</li>
            <li>Technical Information: IP address, browser type, and analytics data from website usage.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
          <p className="text-gray-700">We use collected information for the following purposes:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>To provide consulting services.</li>
            <li>To communicate with you regarding inquiries or services.</li>
            <li>To improve our services and website.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Data Sharing and Disclosure</h2>
          <p className="text-gray-700">We do not sell or rent your data to third parties. However, we may share data with:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>Service providers assisting in our operations.</li>
            <li>Legal authorities if required by law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <p className="text-gray-700">
            We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Data Retention</h2>
          <p className="text-gray-700">
            We retain your data only as long as necessary to fulfil the purposes outlined in this policy or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Your Rights</h2>
          <p className="text-gray-700">You have the right to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>Access your personal data.</li>
            <li>Request corrections to inaccurate data.</li>
            <li>Request deletion of your data.</li>
            <li>Withdraw consent for data processing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700">
            Our website may use cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
          <p className="text-gray-700">If you have any questions about this Privacy Policy, please contact us at:</p>
          <div className="mt-2 text-gray-700 space-y-1">
            <p className="font-semibold">SR FIRST AID HEALTH CARE PVT LTD.</p>
            <p>17/305, FIRST FLOOR, THRIKKAKARA MUNICIPALITY,</p>
            <p>SEA PORT AIR PORT ROAD, CHITTETHUKARA,</p>
            <p>KAKKANAD, KOCHI, KERALA PIN – 682030</p>
            <p>Email: info@srhealthcarecommunity.com</p>
            <p>Phone: 9447008356, 9447108356</p>
          </div>
        </section>

        <section className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-700 italic">
            By using our services, you agree to the terms of this Privacy Policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;