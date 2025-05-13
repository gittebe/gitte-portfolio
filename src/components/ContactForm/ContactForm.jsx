import { useState } from "react";
import "./ContactForm.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botField: "",
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
      className="contact-form"
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
            autoComplete="off"
          />
        </label>
      </p>

      <label htmlFor="name">Name</label><br />
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        autoComplete="name"
      /><br />

      <label htmlFor="email">Email</label><br />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
        required
        autoComplete="email"
      /><br />

      <label htmlFor="message">Message</label><br />
      <textarea
        name="message"
        id="message"
        placeholder="Type your message here..."
        value={formData.message}
        onChange={handleChange}
        rows={10}
        cols={20}
        required
        autoComplete="off"
      ></textarea><br />
      <div className='button-container'>
        <button type="submit">SEND</button>
      </div>
    </form>
  );
};