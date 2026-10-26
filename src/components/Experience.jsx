import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section experience-section"
    >
      <SectionHeading number="02">
        Where I’ve Worked
      </SectionHeading>

      <div className="experience-layout">
        <div className="company-label">
          {experience.shortName}
        </div>

        <article className="experience-content">
          <h3>
            {experience.role}{" "}
            <span>@ {experience.company}</span>
          </h3>

          <p className="date">
            {experience.period} · {experience.location}
          </p>

          <ul className="detail-list">
            {experience.responsibilities.map((responsibility) => (
              <li key={responsibility}>
                {responsibility}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}