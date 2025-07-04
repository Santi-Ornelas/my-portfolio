import React from "react";
import ProjectCard from "../../Components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      name: "Project Dismantle",
      tools: ["React", "Tailwind", "Node", "Vercel", "Node.js", "Express"],
      role: "Full-Stack Engineer",
      description: "Built this very site to showcase my full-stack journey — including a custom backend for email contact."
    },
    {
      name: "Project Jarvis - Coming Soon...",
      tools: ["N/A"],
      role: "Full-Stack Engineer",
      description: "Designing your AI best friend: a task-savvy, productivity-driven daily companion."
    }
  ];

  return (
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
          {projects.map((project, index) => (
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
  );
};

export default Projects;
