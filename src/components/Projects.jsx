import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="work" className="section">
      <SectionHeading number="03">
        Things I’ve Built
      </SectionHeading>

      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}