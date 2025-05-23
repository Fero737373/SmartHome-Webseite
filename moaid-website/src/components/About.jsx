// src/components/About.jsx
import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <img src="/assets/images/founder.jpg" alt="Gründer" className="rounded-lg mb-6 md:mb-0 md:mr-8 w-72 h-72 object-cover"/>
        <div>
          <h2 className="text-3xl font-bold mb-4">Über uns</h2>
          <p className="text-lg mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
          <p className="text-lg">
            Cras venenatis euismod malesuada. Nullam ac erat ante. Nulla facilisi. Sed eget libero consectetur.
          </p>
        </div>
      </div>
    </section>
  );
}
