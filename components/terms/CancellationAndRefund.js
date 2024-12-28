import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-6">Cancellation and Refund Policy</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-gray-700">
            This Cancellation and Refund Policy outlines the terms under which clients may cancel consulting services provided by SR FIRST AID HEALTH CARE PVT LTD. and the conditions under which refunds will be issued.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Cancellation Policy</h2>
          <div className="space-y-3 text-gray-700">
            <div>
              <h3 className="font-medium">Client-Initiated Cancellations:</h3>
              <p>
                Clients must submit a written cancellation request via email to info@srhealthcarecommunity.com at least [30 days] before the scheduled consultation or project initiation date.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Company-Initiated Cancellations:</h3>
              <p>
                SR FIRST AID HEALTH CARE PVT LTD. reserves the right to cancel or reschedule services due to unforeseen circumstances. Clients will be notified promptly, and efforts will be made to reschedule or provide a full refund.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Refund Policy</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Full Refund:</span> If cancellation occurs at least [30 days] before the service start date.
            </li>
            <li>
              <span className="font-medium">Partial Refund:</span> If cancellation occurs within [20 days] of the service start date, a percentage of the fee may be retained to cover administrative costs.
            </li>
            <li>
              <span className="font-medium">No Refund:</span> If services have already commenced or significant work has been delivered.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Refund Process</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>Refund requests must be submitted in writing to info@srhealthcarecommunity.com</li>
            <li>Approved refunds will be processed within [30 Business Days] and returned to the original payment method.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Exceptions</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>Emergency situations or extenuating circumstances will be considered on a case-by-case basis.</li>
            <li>No refunds will be applicable for web application and cloud related technology subscriptions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Contact Information</h2>
          <p className="text-gray-700 mb-3">For any questions regarding cancellations or refunds, please contact us at:</p>
          <div className="text-gray-700 space-y-1">
            <p className="font-semibold">SR FIRST AID HEALTH CARE PVT LTD.</p>
            <p>17/305, FIRST FLOOR, THRIKKAKARA MUNICIPALITY,</p>
            <p>SEA PORT AIR PORT ROAD, CHITTETHUKARA,</p>
            <p>KAKKANAD, KOCHI, KERALA PIN – 682030</p>
            <p>Email: info@srhealthcarecommunity.com</p>
            <p>Phone: 9447008356, 9447108356</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Policy Updates</h2>
          <p className="text-gray-700">
            SR FIRST AID HEALTH CARE PVT LTD. reserves the right to modify this policy at any time. Clients will be notified of significant changes via email or on our official website.
          </p>
        </section>

        <section className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-700 italic">
            By engaging with our services, you agree to the terms outlined in this Cancellation and Refund Policy.
          </p>
          <p className="text-gray-600 mt-4">Last Updated: 27.12.24</p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;