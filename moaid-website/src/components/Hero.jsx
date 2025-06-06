// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';

const WORDS = ['SmartHome-L\u00F6sungen', 'innovative Technik', 'komfortables Wohnen'];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === WORDS.length) return;

    if (subIndex === WORDS[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % WORDS.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section id="home" className="h-screen flex items-center bg-gradient-to-r from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
          {WORDS[index].substring(0, subIndex)}
          <span className="border-r-2 border-gray-900 dark:border-white animate-pulse ml-1" />
        </h1>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
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
