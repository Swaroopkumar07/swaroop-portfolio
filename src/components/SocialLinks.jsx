import { profile } from "../data/portfolio";

export default function SocialLinks({ variant = "inline" }) {
  const links = (
    <>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </>
  );

  if (variant === "rails") {
    return (
      <>
        <aside className="social-rail" aria-label="Social links">
          {links}
        </aside>

        <aside className="email-rail" aria-label="Email">
          <a href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </aside>
      </>
    );
  }

  return (
    <div className="contact-socials" aria-label="Social links">
      {links}
    </div>
  );
}