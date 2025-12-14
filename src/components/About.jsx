import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Marquee from './Marquee';

const techStack = [
  "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP",
  "Prisma", "GraphQL", "Three.js", "React-Three-Fiber", "Figma", "GitHub"
];

const About = () => {
  const containerRef = useRef(null);

  return (
    <section id="about" ref={containerRef} className="py-20 overflow-hidden bg-[var(--color-surface)] text-[var(--color-primary)] transition-colors duration-300">

      {/* Marquee Header */}
      <div className="pt-10 pb-14 text-[var(--color-primary)]">
        <Marquee baseVelocity={-2}>
          <span className="mr-8 block">ABOUT ME - </span>
        </Marquee>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-3 gap-5 md:gap-10 max-w-[820px] mx-auto px-4">

        {/* Column 1: Image */}
        <div id="About_Picture-wrapper" className="relative order-1 md:order-none overflow-hidden rounded-lg aspect-[3/4] md:aspect-auto h-64 md:h-full">
          <img
            className="w-full h-full object-cover"
            alt="Portrait of the developer"
            src="/about/me.jpeg"
          />
        </div>

        {/* Columns 2 & 3: Description & Stack */}
        <div id="About_Description" className="md:col-span-2 flex flex-col justify-center">
          <p className="text-sm mb-4 md:text-base opacity-100">
            I’m a self-taught developer and creative problem-solver passionate about turning ideas into polished, high-performance digital experiences. Whether I’m building a sleek website, an interactive application, or a dynamic Roblox game, I focus on two things above all: performance and alignment with the client’s vision.
          </p>

          <p className="text-sm mb-4 md:text-base opacity-100">
            I work closely with clients who know what they want from the start—because clarity leads to better results. My approach is hands-on and detail-oriented, whether I’m crafting a project from scratch or implementing precise features like secure data persistence or interactive systems.
          </p>

          <p className="text-sm mb-4 md:text-base opacity-100">
            While I enjoy exploring a range of tools, GSAP remains one of my favorites for bringing interfaces to life with smooth, intentional motion that enhances—never distracts from—the user experience.
          </p>

          <p className="text-sm mb-8 md:text-base opacity-100">
            Outside of coding, you’ll find me listening to music, diving into video games, or practicing languages (currently polishing my English and German alongside my native Spanish).
          </p>

          <p className="text-sm mb-8 md:text-base opacity-100 font-semibold">
            I build not just to code—but to connect, deliver, and exceed expectations.
          </p>

          <div>
            <h3 id="About_Stack-title" className="mt-2 mb-4 font-bold text-4xl">
              Techs I love to use
            </h3>

            <div id="About_Stack-pills" className="flex flex-wrap gap-y-2 gap-x-2">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="px-3 py-1 rounded-full border text-sm transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-background)]"
                  style={{ borderColor: 'var(--color-primary)' }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
