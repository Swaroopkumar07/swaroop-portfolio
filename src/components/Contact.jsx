import SocialLinks from "./SocialLinks";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <p className="eyebrow">04. What’s Next?</p>

      <h2>Get In Touch</h2>

      <p>
        Have a project in mind or want to discuss a software
        engineering opportunity? I’d be happy to connect.
      </p>

      <a className="button" href={`mailto:${profile.email}`}>
        Say Hello
      </a>

      <SocialLinks />
    </section>
  );
}