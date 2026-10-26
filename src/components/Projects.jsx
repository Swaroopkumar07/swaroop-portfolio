import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="work" className="section">
      <SectionHeading number="03">
        Things I’ve Built
      </SectionHeading>

      <div className="projects">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <Spotlight>
              <ProjectCard project={project} />
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}