import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '../Hero';
import About from '../About';
import Experience from '../Experience';
import Skills from '../Skills';
import Projects from '../Projects';
import Education from '../Education';
import BehindTheResume from '../BehindResume';
import ContactSection from '../../Components/ContactSection';

// Assets for props
import html from '../../Assets/html.svg';
import css from '../../Assets/css.svg';
import js from '../../Assets/javascript.svg';
import react from '../../Assets/react.svg';
import microsoft from '../../Assets/microsoftoffice.svg';
import tailwind from '../../Assets/tailwind.svg';
import python from '../../Assets/python.svg';

import block1 from '../../Assets/block-1.jpg';
import block2 from '../../Assets/block-2.jpg';
import block3 from '../../Assets/block-3.jpg';
import block4 from '../../Assets/block-4.jpg';
import block5 from '../../Assets/block-5.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const personalData = {
    name: "Santiago Ornelas",
    designation: "ex-Strategy Consultant turning into Full-Stack Developer",
    github: "https://www.github.com/Santi-Ornelas",
    linkedIn: "https://www.linkedin.com/in/santiago-ornelas/",
    leetcode: "https://leetcode.com/",
    resume: "/resume.pdf",
    profile: "/profile.jpg",
    description: (
      <p className="text-gray-300 text-sm max-w-prose">
        I walked away from a fast-track career in strategy consulting to chase something deeper — the urge to build. <br /> <br />
        For years, I believed my path was clear: climb the corporate ladder, become a leading voice in Latin America's financial sector, and drive impact through deals and boardroom strategy. That was the “dream.”<br /><br />
        But something inside kept pulling me elsewhere.<br /><br />
        Beneath the accolades and acceleration, I heard a quieter voice — one that craved creation over convention. I realized I wasn’t meant to advise from the sidelines. I was meant to build, to solve real problems, and to lead from the front lines of innovation.<br /><br />
        So I made the leap. <br /><br />
        Today, I’m forging a new path in full-stack development, blending business acuity with technical execution. I’m not here to dip my toes in. I’m here to earn my place — through grit, purpose, and relentless discipline.<br />
      </p>
    )
  };

  const experiences = [
    {
      id: 1,
      duration: "Jan. 2025 - Present",
      title: "Full-Stack Developer Ramp Up",
      company: "Self-Employed",
    },
    {
      id: 2,
      duration: "Mar. 2024 - Dec. 2024",
      title: "Strategy Consultant",
      company: "Oliver Wyman",
    },
    {
      id: 3,
      duration: "Aug. 2022 - Jan. 2023",
      title: "Strategy Consultant Intern",
      company: "Oliver Wyman",
    },
  ];

  const skillsData = [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: js },
    { name: 'React', icon: react },
    { name: 'Tailwind', icon: tailwind },
    { name: 'Microsoft Office', icon: microsoft },
    { name: 'Python', icon: python },
  ];

  const educations = [
    {
      id: 1,
      duration: "Feb. 2023 - Oct. 2023",
      title: "CFA Level I",
      institution: "CFA Institute",
      grade: "Scored above the global top 10% among 10,000+ candidates."
    },
    {
      id: 2,
      duration: "Aug. 2018 - Dec. 2022",
      title: "Bachelor's Degree in Finance",
      institution: "Tecnologico de Monterrey",
      grade: "GPA: 3.7/4.0",
    },
    {
      id: 3,
      duration: "Aug. 2021 - Dec. 2021",
      title: "International Excellence Program",
      institution: "University of California, Berkeley",
      grade: "GPA: 3.7/4.0",
    },
  ];

  const behindTheResume = [
    {
      title: "Core Beliefs: Built on Discipline, Not Just Talent",
      description: (
        <p className="text-gray-300 text-sm max-w-prose">
          I believe talent fades without grit. What drives me is hard work, curiosity, and the pride of owning what I build.<br />
          Growth starts with steep challenges and showing up, even when it’s hard.
        </p>
      ),
      image: block1,
    },
    {
      title: "Physical Test: 26.2 Miles of Pure Will",
      description: (
        <p className="text-gray-300 text-sm max-w-prose">
          I ran the San Francisco Marathon with no proper training — just to prove to myself I could. The aftermath? Brutal. <br />
          The lesson? You’re capable of far more than comfort allows.
        </p>
      ),
      image: block2,
    },
    {
      title: "Mental Expansion: 150 Books in 3 Years",
      description: (
        <p className="text-gray-300 text-sm max-w-prose">
          During my Bachelor's, I pushed my cognitive limits by devouring books across finance, psychology, philosophy, and politics. <br />
          Neuroplasticity is real — your brain becomes what you feed it.
        </p>
      ),
      image: block3,
    },
    {
      title: "Curiosity Frontier: Genetic Engineering and Biotechnology at Stanford",
      description: (
        <p className="text-gray-300 text-sm max-w-prose">
          While at Oliver Wyman, I dove deep into genetic tech through an advanced Stanford course. Why? <br />
          To understand how innovation reshapes life, food, medicine, and the societies we build.
        </p>
      ),
      image: block4,
    },
    {
      title: "Early Grit: Crushed Military School as a Freshman",
      description: (
        <p className="text-gray-300 text-sm max-w-prose">
          As the first Hispanic to earn ‘Cadet of the Year’ in a 200+ cohort, I learned discipline young. <br />
          Became a member of the National Junior Honor Society and completed 100+ hours of community service.
        </p>
      ),
      image: block5,
    },
  ];

  return (
    <div className="bg-[#0d1224] text-gray-100 min-h-screen w-full relative overflow-x-hidden">
      <img
        src="/hero.svg"
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-30"
      />
      <main className="pt-[100px] flex flex-col items-center px-4 md:px-10 lg:px-24 w-full max-w-screen-xl mx-auto space-y-24">
        <Hero personalData={personalData} />
        <About personalData={personalData} />
        <Experience experiences={experiences} />
        <Skills skillsData={skillsData} />
        <Projects />
        <Education educations={educations} />
        <BehindTheResume behindTheResume={behindTheResume} />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;