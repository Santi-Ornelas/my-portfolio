import React from "react";

const About = ({ personalData }) => {
  return (
    <section id="about" className="my-12 lg:my-16 relative w-full" data-aos="fade-up">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">ABOUT ME</span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Who I am?</p>
          <p className="text-gray-200 text-sm max-w-prose whitespace-pre-line">
            {personalData.description}
          </p>
        </div>

        <div className="flex justify-center order-1 lg:order-2">
          <img
            src={personalData.profile}
            alt="Profile"
            loading="lazy"
            className="rounded-lg grayscale hover:grayscale-0 hover:scale-110 transition-all duration-1000 cursor-pointer w-60 md:w-72 h-85 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
