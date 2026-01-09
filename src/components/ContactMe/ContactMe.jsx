import React from "react";
import "./ContactMe.scss";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="/assets/img/envelope.svg"
            text="gmail"
            link="mailto:deravi.mahsa@gmail.com"
          />
          <ContactInfoCard
            iconUrl="/assets/img/github.svg"
            text="Mderavi"
            link="https://github.com/Mderavi"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
