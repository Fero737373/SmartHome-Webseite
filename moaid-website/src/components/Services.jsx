// src/components/Services.jsx
import React from 'react';

const services = [
  { title: 'Lichtsteuerung', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.' },
  { title: 'Heizungsregelung', desc: 'Sed do eiusmod tempor incididunt ut labore et dolore.' },
  { title: 'Sicherheitslösungen', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  { title: 'Multimedia', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit.' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto text-center px-4 text-gray-900 dark:text-gray-100">
        <h2 className="text-3xl font-bold mb-8">Unsere Leistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
