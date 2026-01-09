import React, { useState } from "react";
import "./ContactForm.scss";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || "");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Your message sent successfully!",
          icon: "success",
        });
        // Reset form
        setValues({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        });
        event.target.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong. Please try again later.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-content" id="contact">
      <form onSubmit={onSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={values.firstname}
            required
            onChange={handleChanges}
            aria-label="First Name"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={values.lastname}
            required
            onChange={handleChanges}
            aria-label="Last Name"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          required
          onChange={handleChanges}
          aria-label="Email"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          value={values.message}
          required
          onChange={handleChanges}
          aria-label="Message"
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "SENDING..." : "SEND"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
