import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Proof } from './sections/Proof';
import { Services } from './sections/Services';
import { Portfolio } from './sections/Portfolio';
import { Process } from './sections/Process';
import { Testimonials } from './sections/Testimonials';
import { Insights } from './sections/Insights';
import { Faq } from './sections/Faq';
import { FinalCta } from './sections/FinalCta';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Proof />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Insights />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
