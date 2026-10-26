import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Built by {profile.name}</p>

      <a
        href="https://v4.brittanychiang.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Design inspired by Brittany Chiang
      </a>
    </footer>
  );
}