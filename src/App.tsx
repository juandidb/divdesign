import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Portfolio } from './sections/Portfolio';
import { Process } from './sections/Process';
import { Testimonials } from './sections/Testimonials';
import { FinalCta } from './sections/FinalCta';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
