import SectionHeading from "./SectionHeading";
import { profile, skills } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading number="01">About Me</SectionHeading>

      <div className="about-layout">
        <div className="about-copy">
          <p>
            Hello! I’m Swaroop, a software engineer who enjoys
            connecting reliable backend systems with thoughtful
            user interfaces.
          </p>

          <p>
            My experience includes developing Spring Boot
            microservices, building REST APIs, and creating web
            and mobile applications with React and React Native.
          </p>

          <p>
            At TCS, I work in the financial services domain,
            contributing to application modernization and
            production releases. Alongside this, my freelance
            projects span education, electric vehicle
            infrastructure, and hospitality.
          </p>

          <p>
            I hold a B.Tech in Computer Science and Engineering
            from Gayatri Vidya Parishad College of Engineering,
            with a CGPA of 8.65.
          </p>

          <p>Some technologies I work with:</p>

          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="profile-card">
          <span className="eyebrow">THE DEVELOPER</span>

          <span className="profile-initials" aria-hidden="true">
            SKP
          </span>

          <p>
            Backend logic.
            <br />
            Frontend detail.
          </p>

          <span className="profile-location">
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}