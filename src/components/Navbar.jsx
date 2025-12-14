import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      // Show text when scrolled past hero section (roughly viewport height)
      const heroHeight = window.innerHeight;
      setShowText(latest > heroHeight * 0.8);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const menuItems = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const name = "CHRIST";
  const letters = name.split('');

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 flex border-b items-end justify-between mx-3 mt-3 pb-1 z-30 origin-left md:mx-5"
        style={{ borderColor: 'var(--color-secondary)' }}
      >
        <a
          href="/"
          className="relative overflow-hidden px-1 rounded-none font-extrabold text-xl tracking-tight transition-all duration-300 bg-[var(--color-primary)] text-[var(--color-surface)]"
        >
          <div className="flex">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 0, opacity: showText ? 1 : 0 }}
                animate={{
                  y: showText ? 0 : 20,
                  opacity: showText ? 1 : 0
                }}
                transition={{
                  duration: 0.3,
                  delay: showText ? index * 0.05 : (letters.length - index - 1) * 0.03,
                  ease: "easeOut"
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </a>

        {/* Date Display */}
        <div className="gap-10 text-sm font-medium overflow-hidden hidden md:flex">
          <span style={{ color: 'var(--color-primary)' }}>Portfolio {new Date().getFullYear()}</span>
          <span style={{ color: 'var(--color-secondary)' }}>
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>

        {/* Menu Button with Animation */}
        <div className="text-lg font-medium leading-5 pointer-events-auto overflow-hidden flex items-center" style={{ color: 'var(--color-primary)' }}>
          <span className="italic">(&nbsp;&nbsp;</span>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="cursor-pointer relative text-lg font-medium overflow-hidden group"
          >
            {/* First span - visible by default, slides up on hover */}
            <span className="inline-block overflow-visible">
              {'Menu'.split('').map((letter, index) => (
                <span
                  key={`top-${index}`}
                  className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full"
                  style={{
                    transitionDelay: `${index * 30}ms`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>

            {/* Second span - starts below, slides up on hover */}
            <span className="absolute top-0 left-0 inline-block">
              {'Menu'.split('').map((letter, index) => (
                <span
                  key={`bottom-${index}`}
                  className="inline-block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0"
                  style={{
                    transitionDelay: `${index * 30}ms`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </button>
          <span className="italic">&nbsp;)</span>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-4 md:right-12 text-white hover:opacity-70 transition-opacity"
            >
              <X size={24} />
            </button>

            {/* Menu Items */}
            <div className="flex flex-col items-center gap-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white text-5xl md:text-7xl font-bold hover:text-gray-400 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="absolute bottom-12 flex gap-8 text-sm text-gray-400">
              <a href="https://github.com/chokchrist" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/christ-jimenez/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
