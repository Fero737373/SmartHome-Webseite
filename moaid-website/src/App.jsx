// src/App.jsx
import React from 'react';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
