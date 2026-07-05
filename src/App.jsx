import { ThemeProvider } from './context/ThemeContext';
import { LangProvider } from './context/LangContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Certifications />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </LangProvider>
    </ThemeProvider>
  );
}
