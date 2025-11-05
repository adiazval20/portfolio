import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { experiences } from "./data/experience";
import { generalSkills } from "./data/skills";
import { projects } from "./data/projects"
import ChatButton from "@/components/ChatButton";
import ExperienceClient from "@/components/ExperienceClient";

export default function Home() {
  return (
    <div>
      <h1 className="mt-20 text-7xl font-semibold text-center">Andy Díaz Valdiviezo</h1>
      <h2 className="text-2xl text-center">Software Engineer II</h2>
      <h2 className="mt-15 text-6xl font-semibold text-center">Who I am</h2>
      <p className="max-w-4xl text-center mx-auto mt-4 text-gray-400 py-5 px-10 bg-gray-800 rounded-lg font-mono text-sm">
        Experienced Software Engineer with over 12 years in web development, specializing in full-stack solutions using .NET
        (ASP.NET/.NET Core), Microsoft SQL Server, and Azure. Skilled in translating complex business needs into clear technical
        and compliance requirements, as well as mentoring junior developers to deliver scalable solutions.
      </p>
      <h2 className="mt-15 text-6xl font-semibold text-center">My Expertise</h2>
      <div className="xl:mx-70 lg:mx-40 md:mx-20 md:flex my-10">
        {generalSkills.map(generalSkill =>
          <div key={generalSkill.id} className={`${generalSkill.iconClass} big-skills-item`}>
            <span dangerouslySetInnerHTML={{ __html: generalSkill.icon }}></span>
            <h1>{generalSkill.title}</h1>
            <p className="text-center">{generalSkill.description}</p>
            <hr />
            <h2>Core Skills</h2>
            <div className="skills">
              {generalSkill.skills.map((skill, i) => (
                <span className="skill" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <h3 className="mt-10 mb-5 text-4xl font-semibold text-center">More than 12 years of experience</h3>
      <div className="xl:mx-70">
        <ExperienceClient items={experiences} />
      </div>
      <h2 className="mt-15 mb-8 text-6xl font-semibold text-center">Personal Projects</h2>
      <div className="md:mx-30 md:flex">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <img src={project.image} />
            <div className="project-body">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="mt-10 mb-5 text-4xl font-semibold text-center">Get in Touch</h3>
      <p className="text-center text-gray-400">
        Feel free to contact me if you’d like to discuss further.
        <br />
        <a href="mailto:andy.diaz.vald@gmail.com">
          <button className="text-sm font-mono bg-sky-800 hover:bg-sky-700 text-white font-bold mt-5 py-2 px-3 rounded">Contact me!</button>
        </a>
      </p>

      <div style={{ position: "relative", height: "500px" }}>
        <ChatButton />
      </div>
    </div>
  );
}