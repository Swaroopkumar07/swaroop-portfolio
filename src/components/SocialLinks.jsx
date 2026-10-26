import {
  FaGithub as SiGithub,
  FaLinkedinIn as SiLinkedin,
  FaInstagram as SiInstagram,
  FaEnvelope as SiGmail,
} from "react-icons/fa";

import { profile } from "../data/portfolio";

export default function SocialLinks({ variant = "inline" }) {
  const socialLinks = [
    {
      name: "GitHub",
      href: profile.github,
      Icon: SiGithub,
      className: "social-github",
    },
    {
      name: "LinkedIn",
      href: profile.linkedin,
      Icon: SiLinkedin,
      className: "social-linkedin",
    },
    {
      name: "Instagram",
      href: profile.instagram,
      Icon: SiInstagram,
      className: "social-instagram",
    },
    {
      name: "Gmail",
      href: profile.email ? `mailto:${profile.email}` : "",
      Icon: SiGmail,
      className: "social-gmail",
    },
  ].filter((link) => link.href?.trim());

  const icons = socialLinks.map(
    ({ name, href, Icon, className }) => {
      const isEmail = href.startsWith("mailto:");

      return (
        <a
          key={name}
          className={`social-icon ${className}`}
          href={href}
          aria-label={
            isEmail ? `Email ${profile.name}` : `${name} profile`
          }
          target={isEmail ? undefined : "_blank"}
          rel={isEmail ? undefined : "noopener noreferrer"}
        >
          <Icon aria-hidden="true" focusable="false" />
          <span className="social-tooltip" aria-hidden="true">
            {name}
          </span>
        </a>
      );
    }
  );

  if (variant === "rails") {
    return (
      <>
        <aside className="social-rail" aria-label="Social links">
          {icons}
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
      {icons}
    </div>
  );
}