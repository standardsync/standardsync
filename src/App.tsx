import { useState, useEffect } from 'react';
import { Header } from './components/homepage/Header';
import { Hero } from './components/homepage/Hero';
import { About } from './components/homepage/About';
import { Services } from './components/homepage/Services';
import { Standards } from './components/homepage/Standards';
import { Process } from './components/homepage/Process';
import { WhyUs } from './components/homepage/WhyUs';
import { Contact } from './components/homepage/Contact';
import { Footer } from './components/homepage/Footer';
import { PrivacyPolicy } from './components/homepage/PrivacyPolicy';
import { TermsOfService } from './components/homepage/TermsOfService';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header scrolled={scrolled} />
      <Hero />
      <About />
      <Services />
      <Standards />
      <Process />
      <WhyUs />
      <Contact />
      <Footer
        onPrivacy={() => setPrivacyOpen(true)}
        onTerms={() => setTermsOpen(true)}
      />
      <PrivacyPolicy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsOfService isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </div>
  );
}

export default App;
