import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

export default function Homepage() {
  return (
    <div id="homepage" className="overflow-clip">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
