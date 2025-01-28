import { useEffect } from "react";

export default function CursorPointer() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const speed = 0.084;

    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    function animateCursor() {
      if (cursor) {
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;

        cursor.style.cssText = `
        opacity: 1;
        border: 2px solid white;
        width: 4px;
        transform: translate(${cursorX}px, ${cursorY}px);
      `;
      }

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <div className="cursor bg-white fixed -top-0.5 -left-0.5 aspect-square rounded-full mix-blend-difference pointer-events-none z-50"></div>
  );
}
