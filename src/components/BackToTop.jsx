import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 500);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Move keyboard focus to the start of the page.
    document.querySelector(".logo")?.focus({
      preventScroll: true,
    });

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }

  if (!visible) return null;

  return (
    <button
      className="back-to-top"
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  );
}