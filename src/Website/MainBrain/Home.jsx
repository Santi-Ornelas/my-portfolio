import React, { useEffect, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '../Hero';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import BehindTheResume from '../BehindResume';
import ContactSection from '../../Components/ContactSection';

import block1 from '../../Assets/blockfin-1.webp';
import block2 from '../../Assets/blockfin-2.webp';
import block3 from '../../Assets/blockfin-3.webp';
import block4 from '../../Assets/blockfin-4.webp';
import block5 from '../../Assets/blockfin-5.webp';

import { personalData } from '../../data/profilePersonalData';
import { experiences }  from '../../data/profileExperience';
import { educations }  from '../../data/profileEdu';

import html from '../../Assets/html.svg';
import css from '../../Assets/css.svg';
import js from '../../Assets/javascript.svg';
import react from '../../Assets/react.svg';
import microsoft from '../../Assets/microsoftoffice.svg';
import tailwind from '../../Assets/tailwind.svg';
import python from '../../Assets/python.svg';

const Experience = React.lazy(() => import('../Experience'));
const Education = React.lazy(() => import('../Education'));

console.log("💥 personalData check", personalData);

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const skillsData = [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: js },
    { name: 'React', icon: react },
    { name: 'Tailwind', icon: tailwind },
    { name: 'Microsoft Office', icon: microsoft },
    { name: 'Python', icon: python },
  ];
  const behindTheResume = [
    {
      title: "Core Beliefs: Built on Discipline, Not Just Talent",
      description: "I believe talent fades without grit. What drives me is hard work, curiosity, and the pride of owning what I build. Growth starts with steep challenges and showing up, even when it’s hard.",
      image: block1,
    },
    {
      title: "Physical Test: 26.2 Miles of Pure Will",
      description: "I ran the San Francisco Marathon with no proper training — just to prove to myself I could. The aftermath? Brutal. The lesson? You’re capable of far more than comfort allows.",
      image: block2,
    },
    {
      title: "Mental Expansion: 150 Books in 3 Years",
      description: "During my Bachelor's, I pushed my cognitive limits by devouring books across finance, psychology, philosophy, and politics. Neuroplasticity is real — your brain becomes what you feed it.",
      image: block3,
    },
    {
      title: "Curiosity Frontier: Genetic Engineering and Biotechnology at Stanford",
      description: "While at Oliver Wyman, I dove deep into genetic tech through an advanced Stanford course. Why? To understand how innovation reshapes life, food, medicine, and the societies we build.",
      image: block4,
    },
    {
      title: "Early Grit: Crushed Military School as a Freshman",
      description: "As the first Hispanic to earn ‘Cadet of the Year’ in a 200+ cohort, I learned discipline young. Became a member of the National Junior Honor Society and completed 100+ hours of community service.",
      image: block5,
    },
  ];

  return (
    <div className="bg-[#0d1224] text-gray-100 min-h-screen w-full relative overflow-x-hidden">
      <img
        src="/hero.svg"
        alt="Hero background"
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-30"
      />
      <main className="pt-[100px] flex flex-col items-center px-4 mb-20 md:px-10 lg:px-24 w-full max-w-screen-xl mx-auto space-y-24">
        <Hero personalData={personalData} />
        <About personalData={personalData} />
        <Suspense fallback={<div>Loading experience...</div>}>
          <Experience experiences={experiences} />
        </Suspense>
        <Skills skillsData={skillsData} />
        <Projects />
        <Suspense fallback={<div>Loading education...</div>}>
          <Education educations={educations} />
        </Suspense>
        <BehindTheResume behindTheResume={behindTheResume} />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;