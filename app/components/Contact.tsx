'use client'
import ContactForm from '@/components/ContactForm';
// components/ContactSection.tsx
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Form submitted successfully');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to submit form');
    }
  };

  return (
    <div className="bg-gray-900 text-white py-20 w-full" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold leading-tight mb-8 text-center ">
          Contact Us
        </h2>
        <div className='h-auto'>
          <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full text-white md:w-1/2 p-6">
            <ContactForm />
          </div>
          <div className="w-full md:w-1/2 p-6 min-h-full text-center md:text-center border rounded-lg">
            <h2 className="text-md mb-4">We serve the following cities</h2>
            <h2 className="text-3xl font-bold mb-4">Vancouver, BC</h2>
            <h2 className="text-3xl font-bold mb-4">Toronto, ON</h2>
            <h2 className="text-3xl font-bold mb-4">Baghdad, IQ</h2>
            <h3 className="text-2xl font-bold mb-4">Contact Number</h3>
            <p className="leading-normal text-lg">
              You can reach us at: <br />
              <span className="font-bold">+1 (604) 262-6139</span>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
