import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { ReactLenis } from "./utils/lenis";
import { useRef } from "react";
import Scroll from "./components/common/Scroll";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);

  useGSAP(() => {
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-indicator",
        start: "top center",
        end: Math.max(document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.body.scrollHeight,),
        scrub: true,
        markers: false,
      },
    });

    scrollTl.to(".scroll-indicator", {
      height: -1,
    });
  });

  return (
    <>
      <ReactLenis root>
        <Scroll />
        <Header headerRef={headerRef} />
        <Main heroTextRef={heroTextRef} heroTitleRef={heroTitleRef} />
        <Footer />
      </ReactLenis>
    </>
  );
}

export default App;
