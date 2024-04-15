import About from '../components/About';
import EmailSection from '../components/EmailSection';
import Facility from '../components/Facility';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Facility />
      <Projects />
      <EmailSection />
      <Footer />
    </main>
  );
}
