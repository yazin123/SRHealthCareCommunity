import React from 'react';

const Terms = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-6">Terms and Conditions</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-gray-700">
            These Terms and Conditions ("Terms") govern the provision of consulting services ("Services") by SR FIRST AID HEALTH CARE PVT LTD ("Consultant") to hospitals, healthcare providers, and related organizations ("Client"). By engaging our Services, the Client agrees to abide by these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Scope of Services</h2>
          <p className="text-gray-700">
            The Consultant agrees to provide consulting services as described in the agreed proposal, statement of work, or service agreement. Any additional services requested by the Client must be agreed upon in writing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Responsibilities of the Client</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>Provide necessary access to information, facilities, and personnel required for the Services.</li>
            <li>Ensure timely decision-making and approvals.</li>
            <li>Maintain confidentiality of proprietary information shared by the Consultant.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Responsibilities of the Consultant</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>Deliver Services professionally and diligently.</li>
            <li>Maintain confidentiality of sensitive Client information.</li>
            <li>Provide periodic updates on project progress.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Fees and Payment Terms</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>Fees shall be as per the agreed proposal or service agreement.</li>
            <li>Payments must be made within [30] days of receiving the invoice.</li>
            <li>Late payments may incur interest at [1.5%] per month.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Confidentiality</h2>
          <p className="text-gray-700">
            Both parties agree to keep all proprietary and confidential information disclosed during the term of the engagement confidential and not disclose it to third parties without prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Intellectual Property</h2>
          <p className="text-gray-700">
            All intellectual property developed during the provision of Services shall remain the property of the Consultant unless otherwise agreed upon in writing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Liability and Indemnity</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>The Consultant's liability is limited to the total fees paid by the Client for the Services.</li>
            <li>Client agrees to indemnify the Consultant against claims arising from misuse of the Services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Termination</h2>
          <p className="text-gray-700">
            Either party may terminate the agreement with [30 days'] written notice. In case of termination, the Client agrees to pay for all Services rendered up to the termination date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Force Majeure</h2>
          <p className="text-gray-700">
            Neither party shall be liable for any failure to perform obligations due to unforeseen events beyond their control, including but not limited to natural disasters, pandemics, or government regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">11. Governing Law</h2>
          <p className="text-gray-700">
            These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction].
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">12. Dispute Resolution</h2>
          <p className="text-gray-700">
            Any disputes arising under these Terms shall first be resolved through amicable negotiation. If unresolved, disputes shall be referred to arbitration in accordance with the rules of [Arbitration Body].
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">13. Entire Agreement</h2>
          <p className="text-gray-700">
            These Terms, along with any proposals or agreements, constitute the entire understanding between the parties and supersede any prior discussions or agreements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">14. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By engaging our Services, the Client acknowledges that they have read, understood, and agreed to these Terms and Conditions.
          </p>
        </section>

        <section className="mt-6 pt-6 border-t border-gray-200">
          <div className="text-gray-700 space-y-1">
            <p className="font-semibold">SR FIRST AID HEALTH CARE PVT LTD.</p>
            <p>17/305, FIRST FLOOR, THRIKKAKARA MUNICIPALITY,</p>
            <p>SEA PORT AIR PORT ROAD, CHITTETHUKARA,</p>
            <p>KAKKANAD, KOCHI, KERALA PIN – 682030</p>
            <p>Email: info@srhealthcarecommunity.com</p>
            <p>Phone: 9447008356, 9447108356</p>
          </div>
          <p className="text-gray-600 mt-4">Date: 27.12.2024</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;