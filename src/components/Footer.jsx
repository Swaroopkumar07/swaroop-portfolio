import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Built by {profile.name}</p>

    </footer>
  );
}