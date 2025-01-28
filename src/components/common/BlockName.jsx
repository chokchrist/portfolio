/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

import gsap from "gsap";
import SplitType from "split-type";

export default function BlockName(props) {
  const headerName = useRef(null);

  useEffect(() => {
    if (headerName.current) {
      const split = new SplitType(headerName.current);

      const headerNameChars = headerName.current.querySelectorAll(".char");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-square",
          start: "top top",
          end: "600% top",
          scrub: true,
          markers: false,
        },
      });

      tl.fromTo(headerNameChars, { y: 69 }, { y: 0, stagger: 0.1 });
      return () => {
        split.revert(); // Limpia las clases generadas por SplitType
        tl.kill(); // Elimina el timeline
      };
    }
  }, []);

  return (
    <h2 ref={props.blockRef} className="bg-dark px-1 text-secondary-200 text-xl font-extrabold origin-left">
      <span className="overflow-hidden inline-block align-bottom">
        <span ref={headerName}>CHRIST</span>
      </span>
    </h2>
  );
}
