import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import ScrollIndicator from './components/ScrollIndicator';
import Navbar from './components/Navbar';
import About from './components/About';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Navbar />
      <ThemeToggle />
      <SmoothScroll>
        <Hero />
        <ProjectGrid />
        <About />
        <Footer />
      </SmoothScroll>
      <ScrollIndicator />
    </div>
  );
}

export default App;
