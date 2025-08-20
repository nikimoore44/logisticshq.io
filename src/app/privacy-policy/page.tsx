
import { Metadata } from "next";
import ScrollAnimation from "../components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Privacy Policy - Logistics HQ",
  description: "Privacy Policy for Logistics HQ LLC - E-commerce prep, storage, and shipping services for Amazon FBA and Walmart WFS sellers.",
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
    
      {/* Header Section */}
      <ScrollAnimation animationType="fade-up" delay={0.1}>
        <div className="bg-black pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
              Privacy Policy
            </h1>
            <div className="space-y-4 text-lg" style={{ fontFamily: 'var(--font-rubik)' }}>
              <p className="text-gray-300">
                <span className="text-[#D8C67F] font-semibold">Effective Date:</span> August 19, 2025
              </p>
              <p className="text-gray-300">
                <span className="text-[#D8C67F] font-semibold">Company Name:</span> Logistics HQ LLC
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Content Section */}
      <div className="bg-black pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <ScrollAnimation animationType="fade-up" delay={0.2}>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                1. Introduction
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                <p>
                  Logistics HQ LLC ("Company," "we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our website and services related to e-commerce prep, storage, and shipping for Amazon FBA and Walmart WFS sellers.
                </p>
                <p>
                  By using our services, you agree to the practices described in this Privacy Policy.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Information We Collect */}
          <ScrollAnimation animationType="fade-up" delay={0.3}>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                2. Information We Collect
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                    <span><span className="text-[#D8C67F] font-semibold">Personal Information:</span> Name, email, phone number, billing details, and shipping addresses.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                    <span><span className="text-[#D8C67F] font-semibold">Business Information:</span> Amazon or Walmart seller IDs, order details, and product information necessary for fulfillment.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                    <span><span className="text-[#D8C67F] font-semibold">Payment Information:</span> We use third-party processors and do not store full credit card details.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                    <span><span className="text-[#D8C67F] font-semibold">Website Usage:</span> IP addresses, browser type, device info, and cookies to improve website performance.</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* How We Use Information */}
          <ScrollAnimation animationType="fade-up" delay={0.4}>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                3. How We Use Information
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                <p>We use collected data to:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                    <span>Provide prep, storage, and shipping services.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                    <span>Process payments and send invoices.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                    <span>Communicate about orders, shipments, and support.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                    <span>Improve operations and customer experience.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                    <span>Comply with legal obligations.</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Sharing Information */}
          <ScrollAnimation animationType="fade-up" delay={0.5}>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                4. Sharing Information
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                <p>We do not sell your data. We may share limited information with:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                    <span><span className="text-[#D8C67F] font-semibold">Service Providers:</span> Payment processors, shipping carriers, IT support.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                    <span><span className="text-[#D8C67F] font-semibold">Legal Obligations:</span> If required by law or to protect our rights.</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Data Security */}
          <ScrollAnimation animationType="fade-up" delay={0.6}>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                5. Data Security
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                <p>
                  We use industry-standard safeguards to protect your information. However, no online system is 100% secure, and we cannot guarantee absolute protection.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Your Rights */}
          <ScrollAnimation animationType="fade-up" delay={0.7}>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                6. Your Rights
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                <p>Depending on your location, you may have the right to:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                    <span>Access, update, or delete your personal information.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                    <span>Opt out of marketing emails.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                    <span>Request details about how we process your data.</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Cookies */}
          <ScrollAnimation animationType="fade-up" delay={0.8}>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                7. Cookies
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                <p>
                  Our website may use cookies to enhance browsing. You can disable cookies through your browser settings, but some features may not function properly.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Third-Party Links */}
          <ScrollAnimation animationType="fade-up" delay={0.9}>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                8. Third-Party Links
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                <p>
                  Our website may contain links to third-party platforms (e.g., Amazon, Walmart). We are not responsible for their privacy practices.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Changes to Policy */}
          <ScrollAnimation animationType="fade-up" delay={1.0}>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                9. Changes to this Policy
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                <p>
                  We may update this Privacy Policy. Updates will be posted on this page with a revised effective date.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Us */}
          <ScrollAnimation animationType="fade-up" delay={1.1}>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                10. Contact Us
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                <p>For questions, contact:</p>
                <div className="">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-[#D8C67F]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-[#D8C67F] font-semibold">Email:</span>
                    <a 
                      href="mailto:la@logisticshq.io" 
                      className="ml-2 text-white hover:text-[#D8C67F] transition-colors underline"
                    >
                      la@logisticshq.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Back to Home Button */}
          <ScrollAnimation animationType="fade-up" delay={1.2}>
            <div className="text-center pt-8">
              <a 
                href="/"
                className="inline-block px-8 py-4 text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                style={{
                  fontFamily: 'var(--font-rubik)',
                  background: 'linear-gradient(to right, #AE8041, #D8C67F)'
                }}
              >
                Back to Home
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
