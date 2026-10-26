import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />
      <SocialLinks variant="rails" />

      <main id="main">
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>

      <Footer />
    </>
  );
}