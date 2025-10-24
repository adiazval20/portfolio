import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { experiences } from "./data/experience";
import { generalSkills } from "./data/skills";
import { projects } from "./data/projects"
import ChatButton from "@/components/ChatButton";

export default function Home() {

  return (
    <div>
      <h1 className="mt-20 text-7xl font-semibold text-center">Andy Díaz Valdiviezo</h1>
      <h2 className="text-2xl text-center">Software Engineer II</h2>
      <p className="text-center text-gray-400">Experienced Software Engineer with over 12 years in web development, specializing in full-stack solutions</p>
      <h2 className="mt-15 text-6xl font-semibold text-center">My Expertise</h2>
      <div className="xl:mx-70 lg:mx-40 md:mx-20 md:flex my-10">
        {generalSkills.map(generalSkill =>
          <div key={generalSkill.id} className="big-skills-item">
            <span className={generalSkill.iconClass} dangerouslySetInnerHTML={{ __html: generalSkill.icon }}></span>
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
      <div className="xl:mx-70">
        {experiences.map(item => (
          <Disclosure key={item.id} as="div" className="experience-item">
            <DisclosureButton className="experience-item-title">
              <div className="item-title-left">
                <div>{item.company}</div>
                <div>{item.title}</div>
              </div>
              <div className="item-title-right">
                <div>{item.location}</div>
                <div>{item.dateFrom} - {item.dateTo}</div>
              </div>
            </DisclosureButton>
            <DisclosurePanel transition className="experience-body">
              <ul>
                {item.bulletPoints.map((bp, i) => (
                  <li key={i}>{bp}</li>
                ))}
              </ul>
            </DisclosurePanel>
          </Disclosure>
        ))}
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

      <div style={{ position: "relative", height: "500px" }}>
        
        <ChatButton />
      </div>
    </div>
  );
}