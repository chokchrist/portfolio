import React from 'react';
import { motion } from 'framer-motion';
import Marquee from './Marquee';

const projects = [
  {
    id: 1,
    title: "AI-Powered Resume Builder",
    category: "AI & Development",
    image: "/projects/CV_Generator.png",
    link: "https://resumecraft-ai-yu36.onrender.com/",
    techStack: ["React", "Cohere API", "Tailwind", "PDF Generation"],
  },
  {
    id: 2,
    title: "NovaBook",
    category: "SaaS & Business Management",
    image: "/projects/NovaBook.png",
    link: "https://nova-book.vercel.app/",
    techStack: ["Next.js", "Supabase", "Prisma", "Stripe"],
  },
];

const ProjectGrid = () => {
  return (
    <section id="work" className="py-24 border-t" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-secondary)' }}>
      {/* Marquee Header */}
      <div className="text-[var(--color-primary)]">
        <Marquee baseVelocity={2}>
          <span className="mr-8 block">RECENT PROJECT - </span>
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 mt-16">
        <h2 className="text-sm font-medium mb-12 uppercase tracking-wider" style={{ color: 'var(--color-secondary)' }}>
          Selected Works (2024-2025)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer block"
      data-hover="View"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-gray-900">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}
        <motion.img
          src={project.image}
          alt={project.title}
          onLoad={() => setIsLoaded(true)}
          className={`object-cover w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-80 group-hover:opacity-100' : 'opacity-0'}`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div>
        <h4 className="text-2xl font-medium transition-colors" style={{ color: 'var(--color-primary)' }}>{project.title}</h4>
        <p className="text-sm mt-1 mb-3" style={{ color: 'var(--color-secondary)' }}>{project.category}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full border text-xs opacity-80"
              style={{ borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectGrid;
