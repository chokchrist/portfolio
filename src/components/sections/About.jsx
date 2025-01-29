import { useRef, useEffect } from "react";

import gsap from "gsap";
import SplitType from "split-type";

export default function About() {
  const about = useRef(null);
  const aboutDescription = useRef(null);
  const aboutSeparator = useRef(null);

  useEffect(() => {
    // Asegúrate de que SplitType separa correctamente el texto
    if (aboutDescription.current) {
      const split = new SplitType(aboutDescription.current);

      const aboutDescriptionChars =
        aboutDescription.current.querySelectorAll(".char");

      // Asegurarse de que las animaciones se ejecuten tras SplitType
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: about.current,
          start: "top center",
          end: "105% center",
          markers: false,
          scrub: true,
        },
      });

      tl.fromTo(
        aboutDescriptionChars,
        { opacity: 0.3 },
        { opacity: 1, stagger: 0.05, ease: "expo.out" }
      );

      tl.to(aboutSeparator.current, { scaleX: 0, duration: 2 }, ">-1");

      // Limpieza para evitar conflictos si se actualiza el componente
      return () => {
        split.revert();
        tl.kill();
      };
    }
  }, []); // Ejecutar solo una vez tras el montaje del componente

  return (
    <div
      ref={about}
      className="relative h-[80vh] px-5 mt-24 mb-[20vh] md:h-[200vh]"
    >
      <div className="sticky top-[64px] flex justify-end items-end w-full">
        <div className="text-[24px] md:text-[32px] font-medium text-right leading-[150%] w-[30ch]">
          <span
            ref={aboutDescription}
            className="inline-block overflow-hidden whitespace-normal"
          >
            From the Canary Islands, Spain. Web developer dedicated to solving
            real-world problems through innovative digital solutions. I bring
            ideas from concept to creation.
          </span>
        </div>
      </div>
      <div className="hidden absolute bottom-0 left-0 items-end gap-6 w-screen pl-5 pr-20 pb-5 md:flex">
        <div className="overflow-hidde">
          <div className="w-6 aspect-square bg-dark"></div>
        </div>
        <div
          ref={aboutSeparator}
          className="about-separator h-[1px] w-full bg-dark origin-right"
        ></div>
      </div>
    </div>
  );
}
