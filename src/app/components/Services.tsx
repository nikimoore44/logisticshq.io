
import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "FBA & WFS Procurement",
      description: "Whether it's polybagging, reboxing, applying FN SKU labels, or bundling, we've got you covered."
    },
    {
      title: "Amazon Freight",
      description: "With connections to Amazon Freight, we can facilitate an intro to an Amazon Freight representative to assist you with cheapest on the market LTL & FTL shipments."
    },
    {
      title: "FBA Shipments",
      description: "SPD, LTL, or FTL shipments sent with minimal, partial, or Amazon Optimized shipment splits."
    },
    {
      title: "FBM Fulfillment",
      description: "We offer next day shipping for all FBM orders across Amazon & Walmart and can access both with our unified platform solution!"
    },
    {
      title: "Storage",
      description: "Whether you strategically want to hold products to wait for the right price or need storage in a pinch, we can help at a competitive rate!"
    },
    {
      title: "Removal Order Processing",
      description: "If you need to remove products from WFS or FBA, we will process the removal and keep you updated on item count and condition."
    }
  ];

  return (
    <section id="services" className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
          Our Services
        </h2>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center item-center">
          {services.map((service, index) => (
                         <div
               key={index}
               className="bg-black rounded-lg p-8 border-b-2 border-t-2 border-l-2 border-r-2 border-[#525252] hover:border-[#D8C67F] hover:shadow-lg hover:shadow-[#D8C67F]/30 hover:shadow-[#D8C67F]/20 hover:shadow-[#D8C67F]/20 hover:-translate-y-2 transition-all duration-300"
             >
                <h3 
                  className="text-3xl font-semibold mb-4 pb-2 text-center border-b-2 tracking-wider"
                  style={{
                    fontFamily: 'var(--font-jockey-one)',
                    background: 'linear-gradient(to right, #AE8041, #D8C67F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    borderImage: 'linear-gradient(to right, #AE8041, #D8C67F) 1'
                  }}
                >
                 {service.title}
               </h3>
                               <p className="text-white leading-relaxed text-base text-center" style={{ 
                  fontFamily: 'var(--font-rubik)'
                }}>
                  {service.description}
                </p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
