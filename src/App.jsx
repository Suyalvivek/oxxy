import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Calculator from './components/Calculator';
import Comparison from './components/Comparison';
import MoreThanCoverage from './components/MoreThanCoverage';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ExitPopup from './components/ExitPopup';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  useEffect(() => {
    // Scroll animations (simple fade-in)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe feature cards and testimonials
    document.querySelectorAll('.feature-card, .testimonial-card, .coverage-feature-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Calculator />
      <Comparison />
      <MoreThanCoverage />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <ExitPopup />
      <WhatsAppFloat />
    </>
  );
}

export default App;
