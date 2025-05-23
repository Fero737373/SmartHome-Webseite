// src/components/Header.jsx
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Moaid SmartHome</div>
        <nav className={`md:flex md:items-center ${open ? '' : 'hidden'}`}>
          {['home','about','services','benefits','contact'].map((sec) => (
            <ScrollLink
              key={sec}
              to={sec}
              smooth
              duration={500}
              className="block md:inline-block mt-2 md:mt-0 md:ml-6 cursor-pointer hover:text-blue-600"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </ScrollLink>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
    </header>
  );
}
