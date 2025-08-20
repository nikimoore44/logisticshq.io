import { Metadata } from "next";
import NavBar from "../components/NavBar";
import ScrollAnimation from "../components/ScrollAnimation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions - Logistics HQ",
  description: "Terms & Conditions for Logistics HQ LLC - E-commerce prep, storage, and shipping services for Amazon FBA and Walmart WFS sellers.",
};

const TermsAndConditions = () => {
  return (
    <>
      <div className="bg-black">
        <NavBar />
        <div className="min-h-screen bg-black text-white">
      
          {/* Header Section */}
          <ScrollAnimation animationType="fade-up" delay={0.05}>
            <div className="bg-black pt-20 pb-16 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                  Terms & Conditions
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
          <div className="bg-black pb-20 px-8">
            <div className="max-w-4xl mx-auto">
              {/* Agreement */}
              <ScrollAnimation animationType="fade-up" delay={0.1}>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                    1. Agreement
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                    <p>
                      These Terms & Conditions ("Terms") govern your use of Logistics HQ LLC's prep, storage, and related logistics services ("Services"). By using our Services, you agree to these Terms. If you do not agree, do not use our Services.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Services Provided */}
              <ScrollAnimation animationType="fade-up" delay={0.15}>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                    2. Services Provided
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                    <p>
                      We offer Amazon FBA and Walmart WFS prep, packaging, labeling, inspection, storage, and shipping services. Services are provided on a case-by-case basis and may vary depending on your agreement with us.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Client Responsibilities */}
              <ScrollAnimation animationType="fade-up" delay={0.2}>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                    3. Client Responsibilities
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                    <p>You agree to:</p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                        <span>Provide accurate product details and shipping information.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                        <span>Ensure products comply with Amazon/Walmart requirements and all applicable laws.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                        <span>Cover all costs, including storage, handling, and shipping fees.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                        <span>Not send hazardous, illegal, or prohibited goods.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Storage & Liability */}
              <ScrollAnimation animationType="fade-up" delay={0.25}>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                    4. Storage & Liability
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                        <span>Storage fees are billed monthly per pallet or per cubic foot, as specified in your service agreement.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                        <span>We take reasonable care in handling your inventory, but liability for loss or damage is limited to the amount specified in your service agreement, unless otherwise agreed in writing.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                        <span>Insurance for stored inventory is the client's responsibility.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Payments */}
              <ScrollAnimation animationType="fade-up" delay={0.3}>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                    5. Payments
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                        <span>All fees must be paid in accordance with our invoices.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                        <span>Late payments may result in interest charges or suspension of services.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                        <span>We reserve the right to hold inventory until outstanding balances are paid.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Shipping & Handling */}
              <ScrollAnimation animationType="fade-up" delay={0.35}>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                    6. Shipping & Handling
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                        <span>We will prepare and ship inventory based on the information you provide.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#D8C67F] mr-3 mt-2 text-xl">•</span>
                        <span>We are not responsible for carrier delays, damages in transit, or rejected shipments by Amazon/Walmart due to client errors.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Termination */}
              <ScrollAnimation animationType="fade-up" delay={0.4}>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                    7. Termination
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                    <p>
                      Either party may terminate services with written notice. Outstanding balances must be paid before release of inventory.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Limitation of Liability */}
              <ScrollAnimation animationType="fade-up" delay={0.45}>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                    8. Limitation of Liability
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                    <p>
                      To the maximum extent permitted by law, our liability is limited to direct damages up to the amount you paid for the services in question. We are not liable for indirect or consequential damages (e.g., lost profits, account suspensions).
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Governing Law */}
              <ScrollAnimation animationType="fade-up" delay={0.5}>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                    9. Governing Law
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                    <p>
                      These Terms shall be governed by the laws of the state where our business is registered, without regard to conflict of law principles.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Changes to Terms */}
              <ScrollAnimation animationType="fade-up" delay={0.55}>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                    10. Changes to Terms
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                    <p>
                      We may update these Terms at any time. Continued use of our services constitutes acceptance of the updated Terms.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Contact */}
              <ScrollAnimation animationType="fade-up" delay={0.6}>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                    11. Contact
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
              {/* <ScrollAnimation animationType="fade-up" delay={0.65}>
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
              </ScrollAnimation> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;
