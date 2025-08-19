
import React from "react";
import ScrollAnimation from "./ScrollAnimation";

const OurPricing: React.FC = () => {
  const pricingPlans = [
    {
      service: "FBA & WFS Procurement",
      price: "$0.50 / unit",
      highlighted: true
    },
    {
      service: "FBM Fulfillment",
      price: "$2.00 / unit",
      highlighted: false
    },
    {
      service: "Storage",
      price: "$40.00 / pallet",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <ScrollAnimation animationType="fade-up" delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
            Our Pricing
          </h2>
        </ScrollAnimation>
        
        {/* Pricing Cards Grid */}
        <ScrollAnimation animationType="fade-up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
                           <div
                 key={index}
                 className=" rounded-2xl p-6 border-2 border-[#525252] hover:border-[#D8C67F] hover:shadow-[0_0_20px_rgba(216,198,127,0.3)] hover:-translate-y-2 transition-all duration-300"
               >
                {/* Service Title */}
                <h3 className="text-4xl font-bold text-white text-center mb-4 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
                  {plan.service}
                </h3>
                
                {/* Starting at text */}
                <p className="text-white text-center text-base mb-4 "style={{ fontFamily: 'var(--font-rubik)' }}>
                  Starting at
                </p>
                
                {/* Price and Unit */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2 " style={{ fontFamily: 'var(--font-jockey-one)' }}>
                    <span 
                      className="text-6xl font-bold"
                      style={{
                        background: 'linear-gradient(to right, #AE8041, #D8C67F)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  
                  {/* Underline */}
                  <div 
                    className="w-24 h-0.5 mx-auto"
                    style={{
                      background: 'linear-gradient(to right, #AE8041, #D8C67F)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default OurPricing;
