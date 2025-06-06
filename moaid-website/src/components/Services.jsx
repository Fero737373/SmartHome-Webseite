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
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800">
          Unsere Leistungen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <div
              key={service.title}
              ref={(el) => (cardRefs.current[idx] = el)}
              onClick={() => toggleExpand(idx)}
              className="relative p-12 pt-16 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Pfeil‐Icon zur Visualisierung */}
              <div
                className={`absolute top-4 right-4 transform transition-transform duration-300 ${
                  expandedIndex === idx ? 'rotate-180' : ''
                }`}
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Icon: Mehr Platz und zentriert */}
              <div className="flex justify-center mb-6 mt-2">{service.icon}</div>

              {/* Titel und kurze Beschreibung */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>

              {/* Ausklappbarer Text mit smooth Animation */}
              <div className={`transition-all duration-500 ease-in-out ${
                expandedIndex === idx ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
              } overflow-hidden`}>
                <div className="pt-4 border-t border-gray-200 text-left text-gray-700 leading-relaxed">
                  <p className="mb-3">{service.more}</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}