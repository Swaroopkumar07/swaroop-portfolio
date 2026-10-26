import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navigation, profile } from "../data/portfolio";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frameId = null;

    function updateNavigation() {
      frameId = null;

      setScrolled(window.scrollY > 24);

      const marker = Math.min(window.innerHeight * 0.3, 220);
      let currentSection = "";

      navigation.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= marker) {
          currentSection = id;
        }
      });

      // Select the last section when the visitor reaches the bottom.
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4;

      if (atBottom) {
        currentSection = navigation[navigation.length - 1]?.id ?? "";
      }

      setActiveSection(currentSection);
    }

    function requestUpdate() {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateNavigation);
      }
    }

    updateNavigation();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const buttonRef = useRef(null);

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 901px)");

    function handleResize(event) {
      if (event.matches) {
        setMenuOpen(false);
      }
    }

    desktopQuery.addEventListener("change", handleResize);

    return () => {
      desktopQuery.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    }

    function handlePointerDown(event) {
      if (!headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={`header ${scrolled ? "header-scrolled" : ""}`}
      ref={headerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeMenu();
        }
      }}
    >
      <a
        className="logo"
        href="#home"
        aria-label="Swaroop home"
        onClick={closeMenu}
      >
        S<span>.</span>
      </a>

      <button
        ref={buttonRef}
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          <FaTimes aria-hidden="true" />
        ) : (
          <FaBars aria-hidden="true" />
        )}
      </button>

      <nav
        id="main-navigation"
        className={`navigation ${menuOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        {navigation.map(({ number, label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "nav-active" : ""}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={closeMenu}
          >
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
          Résumé <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
