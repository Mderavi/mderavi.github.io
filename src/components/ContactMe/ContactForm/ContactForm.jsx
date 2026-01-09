import React, { useState } from "react";
import "./ContactForm.scss";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);

    const { firstName, lastName, email, message } = formData;

    if (!email || !message) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in your email and message.",
        icon: "error",
      });
      setIsSubmitting(false);
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
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully!",
          icon: "success",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        e.target.reset();
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "There was an error sending your message. Please try again.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form needs-validation" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
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
      <button type="submit" className="send-btn" disabled={isSubmitting}>
        {isSubmitting ? "SENDING..." : "SEND"}
      </button>
    </form>
  );
};

export default ContactForm;
