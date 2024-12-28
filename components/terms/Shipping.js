import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-6">Shipping and Delivery Policy</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-gray-700">
            At SR FIRST AID HEALTH CARE PVT LTD., we provide consulting services and related deliverables to hospitals and healthcare institutions. This Shipping and Delivery Policy outlines the terms and conditions related to the delivery of physical and digital products associated with our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Scope of Delivery</h2>
          <div className="space-y-3 text-gray-700">
            <div>
              <h3 className="font-medium">Digital Deliverables:</h3>
              <p>Reports, analysis, software tools, and other digital assets will be delivered electronically via email, secure links, or cloud-based platforms.</p>
            </div>
            <div>
              <h3 className="font-medium">Physical Deliverables:</h3>
              <p>Training materials, printed reports, and hardware (if applicable) will be shipped to the designated address provided by the client.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Delivery Timelines</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Digital Deliverables:</span> Typically delivered within 1-3 business days after the completion of the service, unless specified otherwise in the service agreement.
            </li>
            <li>
              <span className="font-medium">Physical Deliverables:</span> Shipped within 5-10 business days after order confirmation or as agreed upon in the service contract.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Shipping Methods</h2>
          <p className="text-gray-700">
            We use reliable courier and logistics partners to ensure secure and timely delivery of physical products. Shipping details, including tracking information, will be provided upon dispatch.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Shipping Costs</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>Shipping costs for physical deliverables may be included in the project cost or billed separately, depending on the service agreement.</li>
            <li>Clients will be informed of any additional shipping charges before dispatch.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Delivery Address</h2>
          <p className="text-gray-700">
            Clients are responsible for providing accurate shipping and contact information. Any delays or losses caused by incorrect details will not be the responsibility of SR FIRST AID HEALTH CARE PVT LTD.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. International Shipping</h2>
          <p className="text-gray-700">
            For clients located outside the domestic region, international shipping terms, costs, and customs regulations will apply. Additional time may be required for delivery.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Order Tracking</h2>
          <p className="text-gray-700">
            Tracking details for physical shipments will be shared via email after dispatch. Clients can contact our support team for assistance with tracking.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Damaged or Lost Deliverables</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>In case of damaged or lost physical deliverables, clients must report the issue within 5 business days of receipt.</li>
            <li>We will investigate and offer replacement or refund based on the findings.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Contact Information</h2>
          <p className="text-gray-700 mb-3">For any questions or concerns regarding shipping and delivery, please contact us at:</p>
          <div className="text-gray-700 space-y-1">
            <p className="font-semibold">SR FIRST AID HEALTH CARE PVT LTD.</p>
            <p>17/305, FIRST FLOOR, THRIKKAKARA MUNICIPALITY,</p>
            <p>SEA PORT AIR PORT ROAD, CHITTETHUKARA,</p>
            <p>KAKKANAD, KOCHI, KERALA PIN – 682030</p>
            <p>Email: info@srhealthcarecommunity.com</p>
            <p>Phone: 9447008356, 9447108356</p>
          </div>
        </section>

        <section className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-700">
            This policy is subject to change, and updates will be communicated to clients accordingly.
          </p>
          <div className="mt-4 text-gray-600">
            <p>Effective Date: 27.12.24</p>
            <p>Last Updated: 27.12.24</p>
          </div>
          <p className="mt-4 text-gray-700 italic">
            Thank you for choosing SR FIRST AID HEALTH CARE PVT LTD for your healthcare management and consulting needs.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;