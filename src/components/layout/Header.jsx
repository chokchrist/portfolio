import BlockName from "../common/BlockName";
import CurrentDate from "../common/CurrentDate";
// import Menu from "../common/Menu";

import { useRef, useEffect } from "react";

import gsap from "gsap";
import SplitType from "split-type";

export default function Header() {
  const headerRef = useRef(null);
  const blockRef = useRef(null);
  const dateRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 1.5,
    });

    tl.set(blockRef.current, { visibility: "hidden" });
    tl.set(dateRef.current, { visibility: "hidden" });
    tl.set(menuRef.current, { visibility: "hidden" });

    const date = new SplitType(dateRef.current);
    const dateChars = dateRef.current.querySelectorAll(".char");

    tl.fromTo(headerRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.8 });
    tl.fromTo(
      blockRef.current,
      { scaleX: 0 },
      { scaleX: 1, visibility: "visible", duration: 0.5 },
      ">"
    );
    tl.fromTo(
      menuRef.current,
      { opacity: 0 },
      { opacity: 1, visibility: "visible", duration: 0.5 },
      "<"
    );
    tl.fromTo(
      dateChars,
      { y: 100 },
      { y: 0, stagger: 0.01, visibility: "visible" },
      ">"
    );

    const tlPinSpacer = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top top",
        end: "bottom top",
        markers: false,
        scrub: true,
      }
    })

    tlPinSpacer.to(
      headerRef.current,
      { color: "white", duration: 3 }
    )
    tlPinSpacer. to(
      headerRef.current,
      { borderBottomColor: "white", duration: 3},
      ">"
    )

    return () => {
      date.revert();
      tl.kill();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="max-w-full fixed top-0 left-0 right-0 flex items-end justify-between mx-3 mt-3 pb-1 z-30 border-b border-black origin-left md:mx-5"
    >
      <BlockName blockRef={blockRef} />
      <CurrentDate dateRef={dateRef} />
      {/* <Menu menuRef={menuRef} /> */}
    </header>
  );
}
