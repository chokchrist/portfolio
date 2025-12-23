import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Magnetic from './Magnetic';

const Footer = () => {
  return (
    <footer id="contact" className="py-24 px-4 md:px-12 border-t" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-primary)', borderColor: 'var(--color-secondary)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'var(--color-primary)' }}>
            Let's work <br /> together.
          </h2>
          <Magnetic strength={0.3}>
            <a href="mailto:christ.jmanzano@gmail.com" className="text-xl transition-colors" style={{ color: 'var(--color-secondary)' }} data-hover="Email">
              christ.jmanzano@gmail.com
            </a>
          </Magnetic>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-8 text-sm text-gray-400">
            <Magnetic strength={0.2}>
              <a href="https://github.com/chokchrist" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors" data-hover="Code">
                GitHub
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href="https://www.linkedin.com/in/christ-jimenez/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors" data-hover="Social">
                LinkedIn
              </a>
            </Magnetic>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            © {new Date().getFullYear()} Christ. J. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
