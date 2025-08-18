"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentItems = [
    {
      icon: "/svgs/quic.svg",
      title: "Quickly"
    },
    {
      icon: "/svgs/accurately.svg",
      title: "Accurately"
    },
    {
      icon: "/svgs/costEffective.svg",
      title: "Cost Effectively"
    },
    {
      icon: "/svgs/strategically.svg",
      title: "Strategically"
    },
    {
      icon: "/svgs/transparant.svg",
      title: "Transparently"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [contentItems.length]);

  return (
    <header className="  bg-black mt-14 text-white flex flex-col items-center justify-center text-center px-4 py-16">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-7xl font-extrabold  leading-19 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
        <span className="space-x-4">Stress-Free Prep & Logistics for</span> <br />
        <span className="space-x-4 mt-4 block">Amazon FBA & Walmart WFS Sellers</span>
      </h1>

      {/* Subheading */}
      <p className="mt-5 text-xl md:text-2xl text-gray-200 flex gap-3 flex-wrap justify-center items-center font-base leading-relaxed tracking-wide" style={{ fontFamily: 'var(--font-rubik)' }}>
        <span className="space-x-2">Logistics HQ preps your products</span>
                <div className="flex justify-center  mt-4">
          <span className="bg-white px-2 py-1 rounded-md font-medium flex items-center gap-3 transition-all duration-700 transform hover:scale-105" style={{
            boxShadow: '0 0 35px rgba(174, 128, 65, 0.6), 0 0 20px rgba(216, 198, 127, 0.5), 0 0 15px rgba(174, 128, 65, 0.4)'
          }}>
            <Image
              src={contentItems[currentIndex].icon}
              alt={contentItems[currentIndex].title}
              width={30}
              height={30}
            />
                         <span 
               key={currentIndex}
               className="animate-fade-in"
               style={{
                 background: 'linear-gradient(to right, #AE8041, #D8C67F)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                 backgroundClip: 'text'
               }}
             >
               {contentItems[currentIndex].title}
             </span>
          </span>
        </div>
        to help you make more profit.
      </p>

      {/* Contact Us Button */}
      <a href="#contactus" className="mt-22 px-7 py-3 text-white font-base text-[26px] rounded-2xl transition-all duration-300 shadow-lg" style={{ 
        fontFamily: 'var(--font-rubik)',
        background: 'linear-gradient(to right, #AE8041, #D8C67F)'
      }}>
        Contact Us
      </a>

      {/* GIF Image */}
      <div className="mt-26 flex justify-center">
        <Image
          src="/images/gifImage.png"
          alt="Animated GIF"
          width={1100}
          height={1000}
          className="rounded-lg shadow-lg"
        />
      </div>
    </header>
  );
};

export default Header;