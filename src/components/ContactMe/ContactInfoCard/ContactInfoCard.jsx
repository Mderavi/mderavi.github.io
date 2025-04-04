import React from "react";
import "./ContactInfoCard.scss";

const ContactInfoCard = ({ iconSrc, title, value, href }) => {
  const content = (
    <div className="contact-info-card">
      <div className="icon-wrapper">
        {iconSrc && <img src={iconSrc} alt={title} />}
      </div>
      <div className="text-wrapper">
        <span className="title">{title}</span>
        {value && <span className="value">{value}</span>}
      </div>
    </div>
  );

  if (href) {
    return (
      <a className="contact-info-card-link" href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default ContactInfoCard;
