import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botField: ""
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form
      name="portfolio-contact"
      method="POST"
      action="/success"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="portfolio-contact" />
      <p style={{ display: "none" }}>
        <label>
          Don’t fill this out if you’re human:
          <input
            name="bot-field"
            value={formData.botField}
            onChange={handleChange}
          />
        </label>
      </p>

      <label htmlFor="name">Name</label><br />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      /><br />

      <label htmlFor="email">Email</label><br />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      /><br />

      <label htmlFor="message">Message</label><br />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={6}
        required
      ></textarea><br />

      <button type="submit">SEND</button>
    </form>
  );
};
