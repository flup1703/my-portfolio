import "./projectCard.css";
import Button from "../Button/Button";

export default function ProjectCard({
  projectImage,
  image,
  projectName,
  description,
  tags = [],
}) {
  return (
    <div className="project-card">
      <div className="project-image">
        <i className={projectImage}>{image}</i>
      </div>
      <div className="project-content">
        <h3>{projectName}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <Button href="" text="Просмотреть проект" type="btn-primary-card" />
      </div>
    </div>
  );
}
