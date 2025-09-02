import "./contactCard.css";

export default function ContactCard({title, text, icon, href}) {
  return (
    <div className="contact-info">
      <div className="contact-icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <a href={href}>{text}</a>
    </div>
  );
};
