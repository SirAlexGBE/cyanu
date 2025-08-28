import React from "react";

export default function Privacypolicy() {
  return (
    <section id="privacy-policy" className="bg-black text-white py-12 px-6 flex justify-center">
      <div className="max-w-4xl border border-[#cabb67] rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
        <p className="text-sm mb-8 italic">Last updated: August 28, 2025</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
            <p>
              This Privacy Policy explains how <strong className="font-bold text-[#cabb67]"> CyANU</strong> (“we”, “our”, or “us”) collects, uses, and safeguards your personal information when you
              interact with our website, services, and solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Information We Collect</h3>
            <p>We may collect personal details such as your name, email address, phone number, and company information when you contact us or use our services.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. How We Use Your Information</h3>
            <p>Your information is used to provide and improve our services, respond to inquiries, send updates, and maintain security.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Data Security</h3>
            <p>We implement strict measures to protect your personal information from unauthorized access, disclosure, or misuse.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">5. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
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
