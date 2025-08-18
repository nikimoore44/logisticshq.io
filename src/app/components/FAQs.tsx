
import React from "react";

const FAQs: React.FC = () => {

  const faqs = [
    {
      title: "What is Logistics HQ?",
      description: "Logistics HQ is a logistics company that provides fulfillment and shipping services for Amazon FBA and Walmart WFS sellers."
    },
    {
      title: "What services do you offer?",
      description: "We offer fulfillment and shipping services for Amazon FBA and Walmart WFS sellers."
    },
    {
      title: "What is the cost of your services?",
      description: "The cost of our services is based on the services you need and the volume of products you need to ship."
    },
    {
      title: "What is the turnaround time for my orders?",
      description: "The turnaround time for your orders is based on the services you need and the volume of products you need to ship."
    },
    {
      title: "What is the quality of your services?",
      description: "The quality of our services is based on the services you need and the volume of products you need to ship."
    },
  ];

  return (
    <section id="faqs" className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
          Frequently Asked Questions
        </h2>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center item-center">
          {faqs.map((faq, index) => (
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
                 {faq.title}
               </h3>
                               <p className="text-white leading-relaxed text-base text-center" style={{ 
                  fontFamily: 'var(--font-rubik)'
                }}>
                  {faq.description}
                </p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
