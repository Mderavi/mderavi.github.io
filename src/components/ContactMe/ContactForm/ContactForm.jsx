import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    if (!email || !message) {
      alert("Please fill in your email and message.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio contact from ${firstName} ${lastName}`.trim()
    );
    const bodyLines = [
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ];

    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:hello@mahsa.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="send-btn">
        SEND
      </button>
    </form>
  );
};

export default ContactForm;

