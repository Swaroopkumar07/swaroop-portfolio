import { useEffect, useRef } from "react";

export default function Reveal({ children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    if (element.getBoundingClientRect().top < window.innerHeight) {
      return;
    }

    element.classList.add("is-pending");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("is-pending");
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      element.classList.remove("is-pending");
    };
  }, []);

  return (
    <div ref={elementRef} className="reveal">
      {children}
    </div>
  );
}