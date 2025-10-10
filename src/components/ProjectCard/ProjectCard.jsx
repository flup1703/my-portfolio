import Button from "../Button/Button";
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
    <div className="bg-(--main-background) rounded-2xl border border-(--main-border) grid p-3">
      <div className="">
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
      <div className="p-(--project-padding) max-[1030px]:p-3 flex flex-col gap-2">
        <p className="text-3xl text-(--main-foreground) font-semibold pb-2.5">{projectName}</p>
        <p className="text-(--main-muted-foreground) hover:text-(--main-foreground)">{description}</p>
        <div className="flex flex-wrap gap-1 pt-3 pb-3 text-sm font-sans">
          {tags.map((tag, index) => (
            <span key={index} className="bg-(--main-tag-background) pl-2.5 pr-2.5 pb-1 pt-1 rounded-2xl hover:translate-y-0.5">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Button href={href} text="Просмотреть проект"/>
        </div>
      </div>
    </div>
  );
}
