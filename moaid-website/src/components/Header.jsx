// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
        borderBottom: '1px solid #e5e7eb',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0.25rem 1rem',  // weniger Platz oben/unten
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#111827',
            textDecoration: 'none',
          }}
        >
          SmartHome
        </Link>
        <nav aria-label="Hauptnavigation">
          <ul
            style={{
              display: 'flex',
              gap: '1rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            <li><Link to="/" style={{ color: '#374151', fontSize: '0.875rem' }}>Start</Link></li>
            <li><Link to="/about" style={{ color: '#374151', fontSize: '0.875rem' }}>Über Moaid</Link></li>
            <li><Link to="/services" style={{ color: '#374151', fontSize: '0.875rem' }}>Leistungen</Link></li>
            <li><Link to="/qualifications" style={{ color: '#374151', fontSize: '0.875rem' }}>Qualifikationen</Link></li>
            <li><Link to="/support" style={{ color: '#374151', fontSize: '0.875rem' }}>Förderung</Link></li>
            <li><Link to="/gallery" style={{ color: '#374151', fontSize: '0.875rem' }}>Galerie</Link></li>
            <li><Link to="/testimonials" style={{ color: '#374151', fontSize: '0.875rem' }}>Kundenbewertungen</Link></li>
            <li><Link to="/contact" style={{ color: '#374151', fontSize: '0.875rem' }}>Kontakt</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
