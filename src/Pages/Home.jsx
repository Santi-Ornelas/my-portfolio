import React, { useEffect } from 'react';
import AOS from 'aos';
import ProjectCard from '../Components/ProjectCard';
import 'aos/dist/aos.css';
import { BsGithub, BsLinkedin, BsPersonWorkspace } from 'react-icons/bs';
import { FaFacebook, FaTwitterSquare } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import desktopAnim from "../Assets/desktop-final.json"; // adjust path as needed
import ContactSection from '../Components/ContactSection';
import GlowCard from '../Components/GlowCard';
import AnimationLottie from '../Components/animation-lottie';
import Marquee from 'react-fast-marquee';
import html from '../Assets/html.svg';
import css from '../Assets/css.svg';
import js from '../Assets/javascript.svg';
import react from '../Assets/react.svg';
import microsoft from '../Assets/microsoftoffice.svg';
import tailwind from '../Assets/tailwind.svg';
import python from '../Assets/python.svg';
import block1 from "../Assets/block-1.jpg";
import block2 from "../Assets/block-2.jpg";
import block3 from "../Assets/block-3.jpg";
import block4 from "../Assets/block-4.jpg";
import block5 from "../Assets/block-5.jpg";


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
    description:  <p ClassName="text-gray-300 text-sm max-w-prose">
    I walked away from a fast-track career in strategy consulting to chase something deeper — the urge to build. <br /> <br/>
    For years, I believed my path was clear: climb the corporate ladder, become a leading voice in Latin America's financial sector, and drive impact through deals and boardroom strategy. That was the “dream.”<br /><br />
    But something inside kept pulling me elsewhere.<br /><br />
    Beneath the accolades and acceleration, I heard a quieter voice — one that craved creation over convention. I realized I wasn’t meant to advise from the sidelines. I was meant to build, to solve real problems, and to lead from the front lines of innovation.<br /><br />
    So I made the leap. <br/><br/>
    Today, I’m forging a new path in full-stack development, blending business acuity with technical execution. I’m not here to dip my toes in. I’m here to earn my place — through grit, purpose, and relentless discipline.<br></br>
    </p>
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
    { name: 'Python', icon: python},
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
      description: <p className="text-gray-300 text-sm max-w-prose">
        I believe talent fades without grit. What drives me is hard work, curiosity, and the pride of owning what I build.<br />Growth starts with steep challenges and showing up, even when it’s hard.
                  </p>,
      image: block1, // replace with your actual image later
    },
    {
      title: "Physical Test: 26.2 Miles of Pure Will",
      description: <p className="text-gray-300 text-sm max-w-prose">
        I ran the San Francisco Marathon with no proper training — just to prove to myself I could. The aftermath? Brutal. <br />The lesson? You’re capable of far more than comfort allows.
                  </p>,
      image: block2,
    },
    {
      title: "Mental Expansion: 150 Books in 3 Years",
      description: <p className="text-gray-300 text-sm max-w-prose">
        During my Bachelor's, I pushed my cognitive limits by devouring books across finance, psychology, philosophy, and politics. <br />Neuroplasticity is real — your brain becomes what you feed it.
                  </p>,
      image: block3,
    },
    {
      title: "Cuiosity Frontier: Genetic Engineering and Biotechnology at Stanford",
      description: <p className="text-gray-300 text-sm max-w-prose">
        While at Oliver Wyman, I dove deep into genetic tech through an advanced Stanford course. Why? <br />To understand how innovation reshapes life, food, medicine, and the societies we build.
                  </p>,
      image: block4,
    },
    {
      title: "Early Grit: Crushed Military School as a Freshman",
      description: <p className="text-gray-300 text-sm max-w-prose">
        As the first Hispanic to earn ‘Cadet of the Year’ in a 200+ cohort, I learned discipline young. <br />Became a member of the National Junior Honor Society and completed 100+ hours of community service.
                  </p>,
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

        {/* 🟦 Hero Section */}
        <section className="relative flex flex-col items-center justify-between py-4 lg:py-12 w-full" data-aos="fade-up">
          <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
            <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
              <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                Hello, <br />
                This is <span className="text-pink-500">{personalData.name}</span>, <span className="text-[#16f2b3]">{personalData.designation}</span>.
              </h1>

              <div className="my-8 flex items-center gap-5">
                <a href={personalData.github} target="_blank" rel="noreferrer" className="transition-all text-pink-500 hover:scale-125 duration-300"><BsGithub size={30} /></a>
                <a href={personalData.linkedIn} target="_blank" rel="noreferrer" className="transition-all text-pink-500 hover:scale-125 duration-300"><BsLinkedin size={30} /></a>
                <a href={personalData.leetcode} target="_blank" rel="noreferrer" className="transition-all text-pink-500 hover:scale-125 duration-300"><SiLeetcode size={30} /></a>
              </div>

              <div className="flex items-center gap-4">
                {/* Contact Me Button */}
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-medium transition-transform duration-300 hover:scale-105"
                >
                  <span>Contact Me</span>
                  <RiContactsFill size={18} />
                </a>

                {/* Get Resume Button with Download */}
                <a
                  href="/resume.pdf"
                  download="Santiago-Ornelas-Resume"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white text-sm font-medium transition-transform duration-300 hover:scale-105"
                >
                  <span>Get Resume</span>
                  <MdDownload size={18} />
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-r from-[#0d1224] to-[#0a0d37] border border-[#1b2c68a0] rounded-lg p-6">
                <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                  <code className="font-mono text-xs md:text-sm lg:text-base">
                    <div className="blink">
                      <span className="mr-2 text-pink-500">const</span>
                      <span className="mr-2 text-white">coder</span>
                      <span className="mr-2 text-pink-500">=</span>
                      <span className="text-gray-400">{'{'}</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                      <span className="text-gray-400">{`'`}</span>
                      <span className="text-amber-300">Santiago Ornelas</span>
                      <span className="text-gray-400">{`',`}</span>
                    </div>
                    <div className="ml-4 lg:ml-8 mr-2">
                      <span className=" text-white">skills:</span>
                      <span className="text-gray-400">{`['`}</span>
                      <span className="text-amber-300">React</span>
                      <span className="text-gray-400">{"', '"}</span>
                      <span className="text-amber-300">Tailwind</span>
                      <span className="text-gray-400">{"', '"}</span>
                      <span className="text-amber-300">Next.js</span>
                      <span className="text-gray-400">{"', '"}</span>
                      <span className="text-amber-300">Python</span>
                      <span className="text-gray-400">{"', '"}</span>
                      <span className="text-amber-300">SQL</span>
                      <span className="text-gray-400">{"', '"}</span>
                      <span className="text-amber-300">PostgreSQL</span>
                      <span className="text-gray-400">{"'],"}</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                      <span className="text-orange-400">true</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                      <span className="text-orange-400">true</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                      <span className="text-orange-400">true</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                      <span className="text-orange-400">function</span>
                      <span className="text-gray-400">{'() {'}</span>
                    </div>
                    <div>
                      <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                      <span className="text-gray-400">{`(`}</span>
                    </div>
                    <div>
                      <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                      <span className="mr-2 text-white">hardWorker</span>
                      <span className="text-amber-300">&amp;&amp;</span>
                    </div>
                    <div>
                      <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                      <span className="mr-2 text-white">problemSolver</span>
                      <span className="text-amber-300">&amp;&amp;</span>
                    </div>
                    <div>
                      <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                      <span className="mr-2 text-white">skills.length</span>
                      <span className="mr-2 text-amber-300">&gt;=</span>
                      <span className="text-orange-400">5</span>
                    </div>
                    <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
                    <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
                    <div><span className="text-gray-400">{`};`}</span></div>
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🟩 About Section */}
        <section id="about" className="my-12 lg:my-16 relative w-full" data-aos="fade-up">
          <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
            <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">ABOUT ME</span>
            <span className="h-36 w-[2px] bg-[#1a1443]"></span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Who I am?</p>
              <p className="text-gray-200 text-sm lg:text-lg">{personalData.description}</p>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <img
                src={personalData.profile}
                alt="Profile"
                className="rounded-lg grayscale hover:grayscale-0 hover:scale-110 transition-all duration-1000 cursor-pointer w-60 md:w-72 h-85 object-cover"
              />
            </div>
          </div>
        </section>

        {/* 🟧 Experience Section */}
        <section id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]" data-aos="fade-up">
          <img src="/section.svg" alt="Section Background" className="absolute top-0 -z-10" />

          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Experiences</span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>

          <div className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div className="flex justify-center items-start">
                <div className="w-full h-full">
                  <AnimationLottie animationPath="/code.json" />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-6">
                  {experiences.map((experience) => (
                    <GlowCard key={experience.id}>
                      <div className="p-3 relative">
                        <img src="/blur-23.svg" alt="Blur effect" className="absolute bottom-0 opacity-80" />
                        <div className="flex justify-center">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">{experience.duration}</p>
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                            <BsPersonWorkspace size={36} />
                          </div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">{experience.title}</p>
                            <p className="text-sm sm:text-base">{experience.company}</p>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🟨 Skills Section */}
        <section id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]" data-aos="fade-up">
          <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

          <div className="flex justify-center -translate-y-[1px]">
            <div className="w-3/4">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
            </div>
          </div>

          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Skills</span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>

          <div className="w-full my-12 overflow-hidden">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {skillsData.map((skill, id) => (
                <div
                  className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                  key={id}
                >
                  <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                      <div className="h-8 sm:h-10">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="h-full w-auto rounded-lg"
                        />
                      </div>
                      <p className="text-white text-sm sm:text-lg">{skill.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>

        </section>

        {/* 🟥 Projects Section */}
        <section id="projects" className="relative z-50 my-12 lg:my-24" data-aos="fade-up">
          <div className="sticky top-10">
            <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
            <div className="flex items-center justify-start relative">
              <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
                PROJECTS
              </span>
              <span className="w-full h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>

          <div className="pt-24">
            <div className="flex flex-col gap-6">
              {[
                {
                  name: "Project Dismantle",
                  tools: ["React", "Tailwind", "Node","Vercel", "Node.js", "Express"],
                  role: "Full-Stack Engineer",
                  description: "Built this very site to showcase my full-stack journey — including a custom backend for email contact."
                },
                {
                  name: "Project Jarvis - Coming Soon...",
                  tools: ["N/A"],
                  role: "Full-Stack Engineer",
                  description: "Designing your AI best friend: a task-savvy, productivity-driven daily companion."
                },
                
              ].map((project, index) => (
                <div
                  id={`sticky-card-${index + 1}`}
                  key={index}
                  className="sticky-card w-full mx-auto max-w-2xl sticky"
                >
                  <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                    <ProjectCard project={project} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* 🟪 Education Section */}
        <section id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]" data-aos="fade-up">
          <img src="/section.svg" alt="Section Background" className="absolute top-0 -z-10" />
          <div className="flex justify-center -translate-y-[1px]">
            <div className="w-3/4">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
            </div>
          </div>

          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Education</span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>

          <div className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div className="flex justify-center items-start">
                <div className="w-3/4 h-3/4">
                  <Lottie animationData={desktopAnim} loop={true} className="w-full h-full" />
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-6">
                  {educations.map((education) => (
                    <GlowCard key={education.id}>
                      <div className="p-3 relative text-white">
                        <img src="/blur-23.svg" alt="Blur" className="absolute bottom-0 opacity-80" />
                        <div className="flex justify-center">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">{education.duration}</p>
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                            <BsPersonWorkspace size={36} />
                          </div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">{education.title}</p>
                            <p className="text-sm sm:text-base">{education.institution}</p>
                            <p className="text-sm sm:text-base">{education.grade}</p>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
                {/* 🟪 Behind the Resume Section */}
        <section id="behind-the-resume" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]" data-aos="fade-up">
          <img src="/section.svg" alt="Section Background" className="absolute top-0 -z-10" />

          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                Behind the Resume
              </span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>

          {behindTheResume.map((item, index) => (
          <div key={index} className="rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] shadow-lg overflow-hidden">
            <div className="h-48 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          </div>
        ))}

        </section>

        <ContactSection />

      </main>
    </div>
  );
};

export default Home;