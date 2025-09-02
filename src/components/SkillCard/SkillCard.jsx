import "./skillcard.css";

export default function SkillCard({title, text, icon}) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
