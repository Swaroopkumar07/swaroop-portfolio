export default function ProjectCard({ project }) {
  return (
    <article className="project">
      <a
        className="project-art"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name}`}
      >
        <span className="project-art-number" aria-hidden="true">
          {project.number}
        </span>

        <span className="project-art-category">
          {project.category}
        </span>

        <strong>{project.name}</strong>

        <span className="project-art-arrow" aria-hidden="true">
          ↗
        </span>
      </a>

      <div className="project-copy">
        <p className="eyebrow">Featured Project</p>

        <h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.name}
          </a>
        </h3>

        <p className="project-description">
          {project.description}
        </p>

        <ul className="technology-list">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <a
          className="project-link"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.action} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}