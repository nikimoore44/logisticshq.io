"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


const ShowcaseNavbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
              <div
       className={`rounded-[6px] sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] transition-transform duration-300 ${
         visible ? "translate-y-0 top-5" : "-translate-y-full -top-1"
       } bg-[#181717]/90 relative overflow-hidden shadow-[inset_0_0_2px_rgba(255,255,255,0.5)]`}
     >
       {/* Subtle top edge highlight */}
       <div className="absolute top-0 left-0 right-0 h-[1px] "></div>
       <div className=" flex items-center justify-between py-6 px-4 md:px-8 mx-6">

{/* Hamburger Icon (mobile only) */}
<button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 3.75C11.0254 3.75 3.75 11.0254 3.75 20C3.75 28.9746 11.0254 36.25 20 36.25C28.9746 36.25 36.25 28.9746 36.25 20C36.25 11.0254 28.9746 3.75 20 3.75ZM17.1339 15.3661C16.6457 14.878 15.8543 14.878 15.3661 15.3661C14.878 15.8543 14.878 16.6457 15.3661 17.1339L18.2322 20L15.3661 22.8661C14.878 23.3543 14.878 24.1457 15.3661 24.6339C15.8543 25.122 16.6457 25.122 17.1339 24.6339L20 21.7678L22.8661 24.6339C23.3543 25.122 24.1457 25.122 24.6339 24.6339C25.122 24.1457 25.122 23.3543 24.6339 22.8661L21.7678 20L24.6339 17.1339C25.122 16.6457 25.122 15.8543 24.6339 15.3661C24.1457 14.878 23.3543 14.878 22.8661 15.3661L20 18.2322L17.1339 15.3661Z"
                  fill="#52575C"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7 cursor-pointer"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.25 11.25H33.75M6.25 20H33.75M6.25 28.75H20"
                  stroke="#1E1E1E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

                 {/* Logo */}
         <div className="flex items-center">
           <Image
             src="/svgs/logo1.svg"
             alt="Logistics HQ Logo"
             width={100}
             height={100}
             className="w-full h-full"
           />
           
         </div>

         {/* Desktop Links */}
         <div className="hidden md:flex gap-x-10 2xl:gap-x-10 items-center text-white font-medium text-lg">
           <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
           <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
           <Link href="#faqs" className="hover:text-primary transition-colors">FAQs</Link>
           <Link href="#contactus" className="hover:text-primary transition-colors">Contact Us</Link>
         </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-gray-700">
          <ul className="flex flex-col gap-4 text-white font-medium text-base">
            <li>
              <Link href="#services" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link href="#pricing" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Pricing</Link>
            </li>
            <li>
              <Link href="#faqs" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">FAQs</Link>
            </li>
            <li>
              <Link href="#contactus" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShowcaseNavbar;
