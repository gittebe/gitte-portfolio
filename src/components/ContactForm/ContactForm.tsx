import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botField: ""
  });
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.botField) {
      console.warn('Spam detected!'); // Honeypot triggered
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '', botField: '' });
      } else {
        setStatus('Error sending message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error sending message.');
    }
  };

  return (
    <form
      name="portfolio-contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="portfolio-contact" />

      <label htmlFor="name">Name</label>
      <br />
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="email">Email</label>
      <br />
      <input
        type="email"
        placeholder="Email address"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="message">Message</label>
      <br />
      <textarea
        placeholder="Type your message here..."
        name="message"
        value={formData.message}
        onChange={handleChange}
        cols={30}
        rows={10}
        required
      />
      <br />

      {/* Honeypot (Hidden from humans) */}
      <p className="hidden-form">
        <label>
          Don’t fill this out if you’re human: <input
            name="bot-field"
            value={formData.botField}
            onChange={handleChange}
          />
        </label>
      </p>

      <button type="submit">SEND</button>

      {status && <p>{status}</p>}
    </form>
  );
};