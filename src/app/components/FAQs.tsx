"use client";

import React, { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem: React.FC<{ item: FAQItem; isOpen: boolean; toggleOpen: () => void }> = ({
  item,
  isOpen,
  toggleOpen,
}) => {
  return (
    <div 
      className={`rounded-lg p-4 mb-4 cursor-pointer transition-all duration-300 ${
        isOpen 
          ? 'bg-gradient-to-b from-[#D8C67F] to-[#AE8041]/20' 
          : 'bg-[#1C1C1C]  hover:bg-[#838383]'
      }`}
      onClick={toggleOpen}
    >
      <div className="flex justify-between items-center tracking-wider"style={{ fontFamily: 'var(--font-jockey-one)' }}>
        <h3 className={`text-lg font-base ${isOpen ? 'text-white' : 'text-white'}`}>
          {item.question}
        </h3>
        <Image
          src="/svgs/dropArrow.svg"
          alt="Dropdown arrow"
          width={20}
          height={20}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      
      {isOpen && (
        <div className="mt-4 text-white text-base leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
          {item.answer}
        </div>
      )}
    </div>
  );
};

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Are there any fees for new customers?",
      answer: "No- there are no fees for new customers."
    },
    {
      question: "Are there any MOQs?",
      answer: "Yes- we currently only work with clients that can commit to sending at least 1,000 units per month."
    },
    {
      question: "Can I refer another business?",
      answer: "If you refer another business, we will credit you 10 cents per unit that we prep for that other business for the first 3 months of their relationship with us"
    },
    {
      question: "Do I need any software to work with you?",
      answer: "While we do offer you promotional usage for some of our software partners, you are not currently required to use or buy any additional software you do not currently use in your business."
    },
    {
      question: "How can I contact the Logistics HQ team?",
      answer: "If you are looking to become a client, please complete the detail form at the bottom of our website, send us an email at la@logisticshq.io, or reach out on Twitter/X at @LogisticsHQ. Existing customers can contact us via any of the above channels or via texting a direct phone # that we provide specifically for current client inquiries to ensure prompt responses."
    },
    {
      question: "How fast are your turnaround times?",
      answer: "As a company built by current & former e-commerce sellers, we understand the important of fast turnaround times. For FBM orders, we will mark orders as shipped the same day they are placed up to 4pm PST. For FBA or WFS shipments, we aim to turnaround shipments between 24-48 hours from when they are received."
    },
    {
      question: "Where are Logistics HQ warehouses located?",
      answer: "Logistics HQ currently has 1 location in Los Angeles, CA roughly 10 miles away from the Long Beach Port & the Los Angeles Airport (LAX)."
    },
    {
        question: "Are there any hidden fees?",
        answer: "While many 3PLs may try and squeeze sellers for extra profit, we charge NO hidden fees.If there are any additional expenses that we would need to incur (special packing materials, pallets, labels in addition to the FN SKU), you would be made aware before any procurement work occurred."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns
  const leftColumn = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumn = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <ScrollAnimation animationType="fade-up" delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
            Frequently Asked Questions (FAQs)
          </h2>
        </ScrollAnimation>
        
        {/* FAQs Grid - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <ScrollAnimation animationType="fade-left" delay={0.2}>
            <div>
              {leftColumn.map((item, index) => (
                <FAQItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  toggleOpen={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </ScrollAnimation>
          
          {/* Right Column */}
          <ScrollAnimation animationType="fade-right" delay={0.3}>
            <div>
              {rightColumn.map((item, index) => (
                <FAQItem
                  key={index + Math.ceil(faqs.length / 2)}
                  item={item}
                  isOpen={openIndex === index + Math.ceil(faqs.length / 2)}
                  toggleOpen={() => toggleFAQ(index + Math.ceil(faqs.length / 2))}
                />
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
