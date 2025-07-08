// src/Components/ContactSection.jsx
import React from 'react';
import { MdAlternateEmail } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import ContactForm from './ContactForm';
import { SiLeetcode } from 'react-icons/si';

const ContactSection = () => {
  const contactInfo = {
    email: 'santiago.ornsan@gmail.com',
    phone: '+52 (56) 4040 4615',
    github: "https://www.github.com/Santi-Ornelas",
    linkedIn: "https://www.linkedin.com/in/santiago-ornelas/",
  };

  return (
    <section id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] text-white" data-aos="fade-up">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">CONTACT</span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <ContactForm />
        <div className="flex flex-col gap-5 lg:gap-9 text-sm md:text-lg">
          <p className="flex items-center gap-3">
            <MdAlternateEmail size={24} className="text-pink-500" /> {contactInfo.email}
          </p>
          <p className="flex items-center gap-3">
            <IoMdCall size={24} className="text-pink-500" /> {contactInfo.phone}
          </p>
          <div className="flex gap-6 mt-6">
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
              <BsGithub size={32} className="hover:text-pink-500 transition duration-300" />
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <BsLinkedin size={32} className="hover:text-pink-500 transition duration-300" />
            </a>
            <a href={contactInfo.leetcode} target="_blank" rel="noopener noreferrer">
              <SiLeetcode size={32} className="hover:text-pink-500 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;