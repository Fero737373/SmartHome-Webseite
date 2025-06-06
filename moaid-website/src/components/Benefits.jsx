// src/components/Benefits.jsx
import React from 'react';

const benefits = [
  { title: 'Komfort', desc: 'Lorem ipsum dolor sit amet.' },
  { title: 'Sicherheit', desc: 'Consectetur adipiscing elit.' },
  { title: 'Energieeffizienz', desc: 'Sed do eiusmod tempor.' },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center px-4 text-gray-900 dark:text-gray-100">
        <h2 className="text-3xl font-bold mb-8">Ihre Vorteile</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="p-6 max-w-xs bg-white dark:bg-gray-700 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-2">{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
