// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white py-6 mt-12">
      <div className="container mx-auto text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Moaid SmartHome. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
