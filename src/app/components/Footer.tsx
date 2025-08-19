import React from "react";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 px-4 relative overflow-hidden">
      {/* Subtle radial gradient background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-black opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Logo Section */}
        <ScrollAnimation animationType="fade-up" delay={0.1}>
          <div className="flex flex-col items-center justify-center mb-20">
            <div className="mb-12">
              {/* Road/Path Icon */}
                             <div className="w-48 h-48 relative hover:scale-105 transition-transform duration-300">
                 <Image
                   src="/svgs/logo1.svg"
                   alt="Logistics HQ Icon"
                   width={192}
                   height={192}
                   className="w-full h-full relative z-10"
                 />
                 {/* Glow effect around the logo */}
                 <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-[#AE8041] via-[#D8C67F] to-[#AE8041] opacity-20 blur-xl animate-pulse"></div>
               </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Bottom Section - Copyright and Policy Links */}
        <ScrollAnimation animationType="fade-up" delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 " style={{ fontFamily: 'var(--font-rubik)' }}>
            {/* Copyright Information */}
            <div className="text-white text-sm mb-4 md:mb-0">
              Copyright © 2025 Logistics HQ. All rights reserved.
            </div>
            
            {/* Navigation Links */}
            <div className="flex gap-6 text-white text-base flex-wrap justify-center items-center">
                           <a href="/privacy-policy" className="hover:text-[#D8C67F] hover:scale-105 transition-all duration-300">
               Privacy Policy
             </a>
             <a href="/terms-conditions" className="hover:text-[#D8C67F] hover:scale-105 transition-all duration-300">
               Terms & Conditions
             </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;
