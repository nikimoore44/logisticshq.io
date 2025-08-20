
import React from "react";
import Image from "next/image";

const KeyStats: React.FC = () => {
  const stats = [
    "24-48 hour turnaround times",
    "4 loading docks for receiving / shipping pallets",
    "Facility w/ multiple forklifts and pallet jacks",
    "24/7 security detail on the property",
    "1 hour or less response time to customers",
    "Warehouse open 9am - 5pm PST"
  ];

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side - Warehouse Image */}
          <div className="lg:w-1/2 px-10">
            <div className="relative">
              <Image
                src="/images/keyimg.png"
                alt="Warehouse Operations"
                width={800}
                height={600}
                className="w-full h-auto"
                style={{
                  borderImage: 'linear-gradient(to right, #AE8041, #D8C67F) 1'
                }}
              />
            </div>
          </div>

          {/* Right Side - Key Stats */}
          <div className="lg:w-1/2 space-y-6 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider" style={{ fontFamily: 'var(--font-jockey-one)' }}>
              Key Stats & Info
            </h2>
            
            <ul className="space-y-4">
              {stats.map((stat, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D8C67F] mr-3 mt-2">•</span>
                  <span className="text-white text-xl leading-relaxed" style={{ fontFamily: 'var(--font-rubik)' }}>
                    {stat}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyStats;
