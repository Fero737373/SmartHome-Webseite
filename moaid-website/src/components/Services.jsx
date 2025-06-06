import React, { useState, useRef, useEffect } from 'react';

// Beispiel‐SVG‐Icons (können durch beliebige Icon‐Bibliothek ersetzt werden)
function LightIcon() {
  return (
    <svg
      className="w-12 h-12 text-yellow-500 mb-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05l1.414 1.414M12 7a5 5 0 100 10 5 5 0 000-10z"
      />
    </svg>
  );
}

function HeaterIcon() {
  return (
    <svg
      className="w-12 h-12 text-red-500 mb-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 21h8m-4-4v4m4-4V5a2 2 0 00-2-2H8a2 2 0 00-2 2v12m0 0H4m16 0h-2"
      />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg
      className="w-12 h-12 text-green-500 mb-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 11c1.657 0 3 .895 3 2v3H9v-3c0-1.105 1.343-2 3-2zm0-8l8 4v5c0 5.523-3.582 10.74-8 12-4.418-1.26-8-6.477-8-12V7l8-4z"
      />
    </svg>
  );
}

function MultimediaIcon() {
  return (
    <svg
      className="w-12 h-12 text-blue-500 mb-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4V6z"
      />
    </svg>
  );
}

const services = [
  {
    title: 'Lichtsteuerung',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    more:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    icon: <LightIcon />,
  },
  {
    title: 'Heizungsregelung',
    desc: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
    more:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    icon: <HeaterIcon />,
  },
  {
    title: 'Sicherheitslösungen',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    more:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    icon: <SecurityIcon />,
  },
  {
    title: 'Multimedia',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
    more:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    icon: <MultimediaIcon />,
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const cardRefs = useRef([]);

  // Wenn ein Index expandiert wird, scrollen wir smooth dorthin
  useEffect(() => {
    if (expandedIndex !== null && cardRefs.current[expandedIndex]) {
      // Kleiner Timeout, damit die Erweiterung bereits im DOM steht, bevor gescrollt wird
      setTimeout(() => {
        cardRefs.current[expandedIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 200);
    }
  }, [expandedIndex]);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8">Unsere Leistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}