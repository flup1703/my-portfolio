import Button from "../Button/Button";
import Image from "next/image";
import { Note } from "../Note/Note";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProjectCard({
  projectImage,
  image,
  projectName,
  description,
  tags = [],
  href,
  note,
}) {
  return (
    <Card className="bg-(--main-background) border-(--main-border)">
      <CardHeader>
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
        <CardTitle className="flex justify-between">{projectName}{note ? <Note text={note} /> : null}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1 pt-3 pb-3 text-sm font-sans">
          {tags.map((tag, index) => (
            <span key={index} className="bg-(--main-tag-background) pl-2.5 pr-2.5 pb-1 pt-1 rounded-2xl hover:translate-y-0.5">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button href={href} text="Просмотреть проект"/>
      </CardFooter>
    </Card>
  );
}
