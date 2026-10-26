import { useEffect, useRef } from "react";

export default function Reveal({ children, delay = 0 }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = wrapper?.firstElementChild;
    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (
      !wrapper ||
      !content ||
      !("IntersectionObserver" in window) ||
      typeof content.animate !== "function"
    ) {
      return;
    }

    let animation;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.unobserve(wrapper);

        if (motionQuery.matches) return;

        animation = content.animate(
          [
            {
              opacity: 0,
              transform: "translateY(28px)",
            },
            {
              opacity: 1,
              transform: "translateY(0)",
            },
          ],
          {
            duration: 650,
            delay,
            easing: "cubic-bezier(0.2, 0.7, 0.3, 1)",
            fill: "backwards",
          }
        );
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    function handleMotionChange() {
      if (motionQuery.matches) {
        animation?.cancel();
      }
    }

    observer.observe(wrapper);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      observer.disconnect();
      animation?.cancel();
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, [delay]);

  return (
    <div ref={wrapperRef} className="scroll-reveal">
      <div className="scroll-reveal-content">{children}</div>
    </div>
  );
}