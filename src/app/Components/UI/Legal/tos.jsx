import React from "react";

export default function Tos() {
  return (
    <section id="terms-of-service" className="bg-black text-white py-12 px-6 flex justify-center">
      <div className="max-w-4xl border border-[#cabb67] rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Terms of Service</h2>
        <p className="text-sm mb-8 italic">Last updated: August 28, 2025</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h3>
            <p>
              By accessing or using the services of <strong className="font-bold text-[#cabb67]"> CyANU</strong> (“we”, “our”, or “us”), you agree to comply with and be bound by these Terms of
              Service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Use of Services</h3>
            <p>
              You agree to use our services only for lawful purposes and in accordance with all applicable laws and regulations. Any misuse, unauthorized access, or malicious activity is strictly
              prohibited.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Intellectual Property</h3>
            <p>
              All content, trademarks, logos, and materials provided by us remain the intellectual property of <strong className="font-bold text-[#cabb67]"> CyANU</strong>. You may not reproduce,
              distribute, or modify them without prior written consent.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Limitation of Liability</h3>
            <p>We are not liable for any damages, losses, or disruptions resulting from the use of our services. Our responsibility is limited to the extent permitted by applicable law.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">5. Modifications</h3>
            <p>We reserve the right to update or modify these Terms of Service at any time. Continued use of our services after changes means you accept the updated terms.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">6. Contact Us</h3>
            <p>
              For questions about these Terms, please reach out at:{" "}
              <a href="mailto:hello@cyanu.com" className="text-[#cabb67] underline">
                hello@yourcompany.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
