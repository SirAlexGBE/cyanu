import React from "react";

export default function Cookie() {
  return (
    <section id="cookie-policy" className="bg-black text-white py-12 px-6 flex justify-center">
      <div className="max-w-4xl border border-[#cabb67] rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Cookie Policy</h2>
        <p className="text-sm mb-8 italic">Last updated: August 28, 2025</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. What Are Cookies?</h3>
            <p>
              Cookies are small text files stored on your device when you visit our website. They help us improve your browsing experience by remembering preferences, analyzing traffic, and enabling
              certain site functionalities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Types of Cookies We Use</h3>
            <p>
              - <strong>Essential Cookies:</strong> Required for basic site functionality.
              <br />- <strong>Performance Cookies:</strong> Help us understand how visitors interact with our site.
              <br />- <strong>Functional Cookies:</strong> Remember your preferences and settings.
              <br />- <strong>Advertising Cookies:</strong> Deliver relevant ads based on your interests.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Managing Cookies</h3>
            <p>You can control and delete cookies through your browser settings. Please note that disabling cookies may impact your experience on our site and limit certain features.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Third-Party Cookies</h3>
            <p>We may use trusted third-party services (such as analytics and advertising partners) that place cookies on your device to provide insights and deliver relevant content.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">5. Contact Us</h3>
            <p>
              If you have questions about this Cookie Policy, reach out at:{" "}
              <a href="mailto:hello@cyanu.com" className="text-[#cabb67] underline">
                hello@cyanu.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
