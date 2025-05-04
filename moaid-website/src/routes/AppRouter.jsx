import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Qualifications from '../pages/Qualifications';
import Support from '../pages/Support';
import Gallery from '../pages/Gallery';
import Testimonials from '../pages/Testimonials';
import Contact from '../pages/Contact';

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/qualifications' element={<Qualifications />} />
      <Route path='/support' element={<Support />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}