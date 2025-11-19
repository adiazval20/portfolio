import { experiences } from "./data/experience";
import { generalSkills } from "./data/skills";
import { projects } from "./data/projects"
import ChatButton from "@/components/ChatButton";
import ExperienceClient from "@/components/ExperienceClient";

export default function Home() {
  return (
    <div>
      <div className="profile pt-20 md:pt-50 pb-15 md:pb-30 relative">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <h1 className="text-5xl md:text-7xl font-semibold text-center">Andy Díaz Valdiviezo</h1>
        <h2 className="mt-4 text-3xl md:text-5xl text-center">Software Engineer II</h2>
        <h2 className="mt-10 md:mt-20 text-4xl md:text-6xl font-semibold text-center">Who I am?</h2>
        <p className="w-9/10 xl:w-5xl text-center mx-auto mt-4 bg-white/10 text-white py-5 px-2 md:px-10 rounded-lg font-mono text-base">
          Experienced Software Engineer with over 12 years in web development, specializing in full-stack solutions using .NET
          (ASP.NET/.NET Core), Microsoft SQL Server, and Azure. Skilled in translating complex business needs into clear technical
          and compliance requirements, as well as mentoring junior developers to deliver scalable solutions.
        </p>
      </div>
      <div className="expertise py-10 md:py-15 bg-white text-gray-700 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-semibold text-center">My Expertise</h2>
        <div className="flex flex-col w-3/4 sm:w-3/4 md:flex-row md:w-3/4 xl:w-1/2 my-5 md:my-10">
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
      </div>
      <div className="jobs flex flex-col items-center bg-gray-900 py-10 md:py-15">
        <h3 className="mb-8 text-3xl md:text-6xl font-semibold text-center">Profesional experience</h3>
        <div className="w-8/10 xl:w-3xl">
          <ExperienceClient items={experiences} />
        </div>
      </div>
      <div className="projects pt-10 md:pt-15 pb-10 md:pb-20">
        <h2 className="mb-8 text-4xl md:text-6xl font-semibold text-center">Personal Projects</h2>
        <div className="flex flex-col md:flex-row mx-5 md:mx-30 justify-center">
          {projects.map(project => (
            <div key={project.id} className="project-item relative mb-5 md:mb-0">
              <img src={project.image} alt="" />
              <div className="project-body">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="contact pt-10 pb-20 bg-white text-gray-900">
        <h3 className="mb-5 text-4xl font-semibold text-center">Get in Touch</h3>
        <p className="text-center font-mono text-sm">
          Feel free to contact me if you’d like to discuss further.
          <br />
          <a href="mailto:andy.diaz.vald@gmail.com">
            <button className="text-sm font-mono bg-sky-600 hover:bg-sky-500 text-white font-bold mt-5 py-2 px-3 rounded">Contact me!</button>
          </a>
        </p>
        <div className="relative">
          <ChatButton />
        </div>
      </div>
    </div>
  );
}