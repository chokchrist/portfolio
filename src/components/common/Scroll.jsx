import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Scroll() {
  useEffect(() => {
    const tlPinSpacer = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top top",
        end: "bottom top",
        markers: false,
        scrub: true,
      },
    });

    tlPinSpacer.to(scroll.current, { color: "white" });

    tlPinSpacer.to(scroll.current.querySelector("div"), {
      backgroundColor: "white",
    });

    return () => tlPinSpacer.kill();
  }, []);

  const scroll = useRef(null);

  const text = "Scroll";

  return (
    <div
      id="scroll-indicator"
      className="hidden fixed bottom-3 right-5 flex-col align-center gap-2 z-40 md:flex"
      ref={scroll}
    >
      <div className="scroll-indicator line h-14 w-[1px] self-center bg-dark origin-bottom"></div>
      <p className="font-medium text-sm">
        {text.split("").map((letter, index) => (
          <span key={index} className="inline-block">
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
}
