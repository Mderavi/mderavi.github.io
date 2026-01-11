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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    if (!email || !message) {
      alert("Please fill in your email and message.");
      return;
    }

    // Submit to Web3Forms
    const formDataToSubmit = new FormData(e.target);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        alert("Thank you! Your message has been sent successfully.");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <form className="contact-form needs-validation" action="https://api.web3forms.com/submit" method="POST" >
      <input type="hidden" name="access_key" value="ed634784-9429-4bc0-afe1-26ba4bdd63f3" />
      <input type="hidden" name="subject" value="New Portfolio Contact Form Submission" />
      <div className="form-row">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="send-btn">
        SEND
      </button>
    </form>
  );
};

export default ContactForm;

