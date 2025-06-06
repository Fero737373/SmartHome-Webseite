// src/components/Contact.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'USER_ID')
      .then(() => setSent(true))
      .catch((err) => console.error(err));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-lg px-4 text-gray-900 dark:text-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Kontakt</h2>
        {sent ? (
          <p className="text-center text-green-600">Vielen Dank, wir melden uns bald!</p>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="user_name" placeholder="Name" required className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <input type="email" name="user_email" placeholder="E-Mail" required className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <textarea name="message" rows="5" placeholder="Nachricht" required className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Absenden
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
