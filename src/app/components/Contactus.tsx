

import React from "react";
import ScrollAnimation from "./ScrollAnimation";

const Contactus: React.FC = () => {
  return (
    <section id="contactus" className="bg-black pt-10 pb-20 x-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <ScrollAnimation animationType="fade-up" delay={0.1}>
          <div className="mb-10">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
              Get in touch today
            </h2>
            <p className="text-white text-xl leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
              For inquiries or questions, please email:{" "}
            </p>
            <p className="text-white text-xl leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
              <a
                href="mailto:la@logisticshq.io"
                className="underline font-bold hover:text-[#D8C67F] transition-colors"
              >
                la@logisticshq.io
              </a>
              {" "}or fill out the inquiry form.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Google Maps */}
          <ScrollAnimation animationType="fade-left" delay={0.2}>
            <div className="space-y-8">
              {/* Google Maps Embed */}
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26495.579493827223!2d-118.30853349999998!3d33.89100755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b581539bdd09%3A0xc619371ab562ca91!2sGardena%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1755682974673!5m2!1sen!2s" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gardena, CA Location"
                  className="rounded-lg"
                ></iframe>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 mt-10">
                <div className="flex items-center text-xl text-white" style={{ fontFamily: 'var(--font-rubik)' }}>
                  <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:la@logisticshq.io" style={{ fontFamily: 'var(--font-rubik)' }}>la@logisticshq.io</a>
                </div>

                {/* <div className="flex items-center text-xl text-white">
                  <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+1234567890" style={{ fontFamily: 'var(--font-rubik)' }}>(123)-456-7890</a>
                </div> */}

                <div className="flex items-center text-xl text-white">
                  <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <a href="https://maps.app.goo.gl/3oq3tFARsjo5bUNa9" target="_blank" style={{ fontFamily: 'var(--font-rubik)' }}>Gardena, CA 92048</a>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Side - Contact Form */}
          <ScrollAnimation animationType="fade-right" delay={0.3}>
            <div>
              <form className="space-y-8">
                {/* First Name and Last Name - Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#AFAFAF] text-base font-medium mb-3" style={{ fontFamily: 'var(--font-rubik)' }}>
                      First Name <span className="text-red-500">*</span>
                    </label>
                                         <input
                       type="text"
                       placeholder="John"
                       className="w-full px-4 py-4 bg-[#1C1C1C] border border-[#525252] rounded-lg text-[#71717A] text-base focus:outline-none focus:border-[#D8C67F] transition-all duration-300 hover:border-[#D8C67F] hover:shadow-lg hover:shadow-[#D8C67F]/30 hover:-translate-y-1"
                       style={{ fontFamily: 'var(--font-rubik)' }}
                     />
                  </div>

                  <div>
                    <label className="block  text-[#AFAFAF]  text-base font-medium mb-3" style={{ fontFamily: 'var(--font-rubik)' }}>
                      Last Name <span className="text-red-500">*</span>
                    </label>
                                         <input
                       type="text"
                       placeholder="Smith"
                       className="w-full px-4 py-4 bg-[#1C1C1C] border border-[#525252] rounded-lg text-[#71717A] text-base focus:outline-none focus:border-[#D8C67F] transition-all duration-300 hover:border-[#D8C67F] hover:shadow-lg hover:shadow-[#D8C67F]/30 hover:-translate-y-1"
                       style={{ fontFamily: 'var(--font-rubik)' }}
                     />
                  </div>
                </div>

                {/* Email and Phone - Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block  text-[#AFAFAF]  text-base font-medium mb-3" style={{ fontFamily: 'var(--font-rubik)' }}>
                      Email <span className="text-red-500">*</span>
                    </label>
                                         <input
                       type="email"
                       placeholder="seller@amazon.com"
                       className="w-full px-4 py-4 bg-[#1C1C1C] border border-[#525252] rounded-lg text-[#71717A] text-base focus:outline-none focus:border-[#D8C67F] transition-all duration-300 hover:border-[#D8C67F] hover:shadow-lg hover:shadow-[#D8C67F]/30 hover:-translate-y-1"
                       style={{ fontFamily: 'var(--font-rubik)' }}
                     />
                  </div>

                  <div>
                    <label className="block  text-[#AFAFAF]  text-base font-medium mb-3" style={{ fontFamily: 'var(--font-rubik)' }}>
                      Phone <span className="text-red-500">*</span>
                    </label>
                                         <input
                       type="tel"
                       placeholder="(123) 456-7890"
                       className="w-full px-4 py-4 bg-[#1C1C1C] border border-[#525252] rounded-lg text-[#71717A] text-base focus:outline-none focus:border-[#D8C67F] hover:border-[#D8C67F] hover:shadow-lg hover:shadow-[#D8C67F]/30 hover:-translate-y-1 transition-all duration-300"
                       style={{ fontFamily: 'var(--font-rubik)' }}
                     />
                  </div>
                </div>

                {/* Company - Full Width */}
                <div>
                  <label className="block  text-[#AFAFAF]  text-base font-medium mb-3" style={{ fontFamily: 'var(--font-rubik)' }}>
                    Company <span className="text-red-500">*</span>
                  </label>
                                     <input
                     type="text"
                     placeholder="Amazing Seller LLC"
                     className="w-full px-4 py-4 bg-[#1C1C1C] border border-[#525252] rounded-lg text-[#71717A] text-base focus:outline-none focus:border-[#D8C67F] hover:border-[#D8C67F] hover:shadow-lg hover:shadow-[#D8C67F]/30 hover:-translate-y-1 transition-all duration-300"
                     style={{ fontFamily: 'var(--font-rubik)' }}
                   />
                </div>

                {/* Message Area */}
                <div>
                  <label className="block  text-[#AFAFAF] text-base font-medium mb-3" style={{ fontFamily: 'var(--font-rubik)' }}>
                    Briefly describe what you need
                  </label>
                                     <textarea
                     rows={5}
                     placeholder="Please type your message here....."
                     className="w-full px-4 py-4 bg-[#1C1C1C] border border-[#525252] rounded-lg text-[#71717A] text-base placeholder-gray-400 focus:outline-none focus:border-[#D8C67F] hover:border-[#D8C67F] hover:shadow-lg hover:shadow-[#D8C67F]/30 hover:-translate-y-1 transition-all duration-300 resize-none"
                     style={{ fontFamily: 'var(--font-rubik)' }}
                   ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                  <a href="#"
                     type="button"
                     className="bg-white text-black font-semibold py-4 px-12 rounded-lg hover:bg-gray-100 hover:shadow-xl hover:shadow-[#D8C67F]/40 hover:-translate-y-2 hover:scale-105 transition-all duration-300 text-lg"
                     style={{ 
                      fontFamily: 'var(--font-rubik)',
                      background: 'linear-gradient(to right, #AE8041, #D8C67F)'
                    }}
                   >
                     Get Started
                   </a>
                </div>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
