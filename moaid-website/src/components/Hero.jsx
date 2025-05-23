// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center bg-gradient-to-r from-blue-100 to-white">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4">Lorem Ipsum Dolor Sit Amet</h1>
        <p className="text-xl mb-8">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        <a
          href="#services"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Mehr erfahren
        </a>
      </div>
    </section>
  );
}
