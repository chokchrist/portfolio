import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";

export default function Hero() {
  const heroTitleRefMd = useRef(null);
  const heroTitleRefSm = useRef(null);
  const heroTextRef = useRef(null);

  const title = "Hi I'm Christ";
  const description =
    "I'm a web developer passionate about creating modern and engaging digital experiences. Let's turn your dreams into reality.";

  useEffect(() => {
    if (
      (heroTitleRefMd.current || heroTitleRefSm.current) &&
      heroTextRef.current
    ) {
      const titleSplit = new SplitType(
        heroTitleRefMd.current || heroTitleRefSm.current
      );
      const textSplit = new SplitType(heroTextRef.current);

      const titleCharsMd = heroTitleRefMd.current.querySelectorAll(".char");
      const titleCharsSm = heroTitleRefSm.current.querySelectorAll(".char");
      const textChars = heroTextRef.current.querySelectorAll(".word");

      const tl = gsap.timeline();
      tl.fromTo(
        titleCharsMd || titleCharsSm,
        { y: 320 },
        { y: 0, stagger: 0.03 }
      );
      tl.fromTo(textChars, { y: 80 }, { y: 0, stagger: 0.008 }, "<+.5");

      return () => {
        titleSplit.revert();
        textSplit.revert();
      };
    }
  }, []);

  return (
    <div id="hero" className="relative h-screen">
      {/* TODO: Add div of 3D rendering */}
      <div className="flex flex-col gap-6 justify-between items-center h-full pt-[128px] pb-[64px] md:px-0 md:justify-center">
        <h1 className="uppercase font-extrabold text-[56px] leading-[100%] text-center z-10 overflow-hidden md:block md:text-[160px]">
          <span ref={heroTitleRefMd} className="hidden md:block">
            Hi, I&apos;m <br />
            Christ
          </span>
          <span ref={heroTitleRefSm} className="block md:hidden">
            {title}
          </span>
        </h1>
        <p
          ref={heroTextRef}
          className="text-center text-base font-normal leading-[130%] px-6 overflow-hidden sm:w-[360px] z-10"
        >
          {description}
        </p>
      </div>
      <div className="hero-square absolute bottom-3 left-3 w-5 aspect-square bg-dark md:left-5"></div>
    </div>
  );
}
