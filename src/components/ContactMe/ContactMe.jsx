import React from "react";
import "./ContactMe.scss";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-layout">
          <div className="contact-info-column">
            <ContactInfoCard
              iconSrc="/assets/img/envelope.svg"
              title="gmail"
              value=""
              href="mailto:deravi.mahsa@gmail.com"
            />
            <ContactInfoCard
              iconSrc="/assets/img/github.svg"
              title="Mderavi"
              value=""
              href="https://github.com/Mderavi"
            />
          </div>
          <div style={{ flex: 1 }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
