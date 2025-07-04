import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";
import { MdDownload } from "react-icons/md";

const Hero = ({ personalData }) => {
  return (
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
            <a href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-medium transition-transform duration-300 hover:scale-105">
              <span>Contact Me</span>
              <RiContactsFill size={18} />
            </a>

            <a href="/resume.pdf" download="Santiago-Ornelas-Resume" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white text-sm font-medium transition-transform duration-300 hover:scale-105">
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
                      <span className="text-gray-400">{'['}</span>
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
                      <span className="text-gray-400">{'('}</span>
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
                    <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{');'}</span></div>
                    <div><span className="ml-4 lg:ml-8 text-gray-400">{'};'}</span></div>
                    <div><span className="text-gray-400">{'};'}</span></div>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;