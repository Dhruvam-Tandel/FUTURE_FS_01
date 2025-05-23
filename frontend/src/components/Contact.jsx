import React, { useState } from 'react';


const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setError('');

  const apiUrl = import.meta.env.VITE_API_URL;
    
    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message. Please try again.');
      setStatus('');
    }
  };
  
  return (
    <section
      id="contact"
      className="w-full min-h-screen py-20 px-4 sm:px-8 md:px-16 bg-gray-900 text-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-violet-600 mb-6 text-center">
          Let's Connect
        </h2>
        <p className="text-gray-300 text-base sm:text-lg text-center mb-10">
          Have a project in mind, a question, or just want to say hi? Fill out the form and I'll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            required
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            required
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={form.message}
            required
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
          ></textarea>

          <button
            type="submit"
            disabled={status === "Sending..."}
            className={`w-full sm:w-auto px-8 py-3 rounded font-semibold text-white shadow-md transition ${
              status === 'Sending...'
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-violet-500 hover:bg-blue-600'
            }`}
          >
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>

          {status && !error && (
            <p className="mt-4 text-sm font-medium text-blue-400 text-center">
              {status}
            </p>
          )}
          
          {error && (
            <p className="mt-4 text-sm font-medium text-red-400 text-center">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;