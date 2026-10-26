import { useRef } from "react";

export default function Spotlight({ children }) {
  const cardRef = useRef(null);

  function handlePointerMove(event) {
    if (event.pointerType !== "mouse") return;

    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();

    card.style.setProperty(
      "--spotlight-x",
      `${event.clientX - bounds.left}px`
    );

    card.style.setProperty(
      "--spotlight-y",
      `${event.clientY - bounds.top}px`
    );
  }

  return (
    <div
      ref={cardRef}
      className="spotlight-card travel-border"
      onPointerMove={handlePointerMove}
    >
      {children}
    </div>
  );
}