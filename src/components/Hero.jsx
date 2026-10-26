import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      aria-labelledby="hero-title"
    >
      <p className="eyebrow">Hi, my name is</p>

      <h1 id="hero-title">{profile.name}.</h1>

      <p className="hero-statement">
        I build systems.
        <br />
        I craft experiences.
      </p>

      <p className="hero-description">
        I’m a backend-focused full-stack engineer working with
        Java, Spring Boot, and React. Currently at{" "}
        <a href="#experience">Tata Consultancy Services</a>,
        I contribute to modernizing financial applications and
        building reliable digital experiences.
      </p>

      <a className="button hero-button" href="#work">
        Explore my work <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}