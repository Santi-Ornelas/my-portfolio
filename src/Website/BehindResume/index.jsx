import React from "react";

const BehindTheResume = ({ behindTheResume }) => {
  return (
    <section id="behind-the-resume" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]" data-aos="fade-up">
      <img src="/section.svg"  width="368" height="150" alt="Section Background" loading="lazy" className="absolute top-0 -z-10" />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Behind the Resume
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {behindTheResume && behindTheResume.length > 0 && behindTheResume.map((item, index) => (
        <div key={index} className="rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] shadow-lg overflow-hidden">
          <div className="h-48 w-full overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="rounded-lg mx-auto w-full h-full object-contain"
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BehindTheResume;