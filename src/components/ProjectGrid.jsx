import { motion } from 'framer-motion';
import Marquee from './Marquee';

const projects = [
  {
    id: 1,
    title: "AI-Powered Resume Builder",
    category: "AI & Development",
    image: "/projects/CV_Generator.png",
  },
  {
    id: 2,
    title: "E-Commerce",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1000&auto=format&fit=crop",
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
          Selected Works (2023-2024)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              data-hover="View"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-gray-900">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div>
                <h4 className="text-2xl font-medium transition-colors" style={{ color: 'var(--color-primary)' }}>{project.title}</h4>
                <p className="text-sm mt-1" style={{ color: 'var(--color-secondary)' }}>{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
