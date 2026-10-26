import { useState } from "react";
import { navigation, profile } from "../data/portfolio";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <a
        className="logo"
        href="#home"
        aria-label="Swaroop home"
        onClick={closeMenu}
      >
        S<span>.</span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      <nav
        id="main-navigation"
        className={`navigation ${menuOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            closeMenu();
          }
        }}
      >
        {navigation.map(({ number, label, id }) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>
            <span>{number}.</span> {label}
          </a>
        ))}

        <a
          className="button button-small"
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Résumé
        </a>
      </nav>
    </header>
  );
}