import "./projectCard.css";
import Button from "../Button/Button";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  projectImage,
  image,
  projectName,
  description,
  tags = [],
  href,
}) {
  return (
    <div className="bg-(--weather-card) rounded-2xl border border-(--border) grid p-3">
      <div className="project-image">
        {image ? (
          <Image
            className="size-full rounded-2xl"
            src={image}
            alt="project-image-icon"
            width={300}
            height={300}
            priority={true}
          />
        ) : (
          <i
            className={projectImage}
            alt="project-image-icon"
            width={300}
            height={300}
          />
        )}
      </div>
      <div className="project-content">
        <h3>{projectName}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag  bg-(--weather-card-background)">
              {tag}
            </span>
          ))}
        </div>
        <Button href={href} text="Просмотреть проект" type="btn-primary-card" />
      </div>
    </div>
  );
}
