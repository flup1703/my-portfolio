import ProjectCard from "../ProjectCard/ProjectCard";
import "./project.css";

export default function Project() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Мои проекты</h2>
        <div className="projects-grid">
          <ProjectCard
            projectImage={"fas fa-shopping-cart"}
            image={""}
            projectName="Интернет-магазин"
            description="Полнофункциональный магазин с корзиной, фильтрами и поиском"
            tags={["React", "Redux", "Tailwind"]}
          />
          <ProjectCard
            projectImage={"fas fa-comments"}
            image={""}
            projectName="Мессенджер"
            description="Реал-тайм чат с комнатами и уведомлениями"
            tags={["Vue.js", "Socket.io", "Node.js"]}
          />
          <ProjectCard
            projectImage={"fas fa-tasks"}
            image={""}
            projectName="Task Manager"
            description="Приложение для управления задачами с drag-and-drop"
            tags={["JavaScript", "CSS3", "LocalStorage"]}
          />
          <ProjectCard
            projectImage={"fas fa-cloud"}
            image={""}
            projectName="Weather"
            description="Простенькое приложение погоды с избранным и локацией"
            tags={["React", "JavaScript", "CSS3", "LocalStorage", "API"]}
          />
          <ProjectCard
            projectImage={"fas fa-address-card"}
            image={""}
            projectName="Look a Profile"
            description="Простенький сайт для просмотра профиля на GitHub"
            tags={["React", "JavaScript", "Tailwind", "LocalStorage", "API"]}
          />
          <ProjectCard
            projectImage={"fas fa-film"}
            image={""}
            projectName="Film's"
            description="Простенький сайт с фильмами"
            tags={["React", "JavaScript", "Tailwind", "LocalStorage", "API"]}
          />
        </div>
      </div>
    </section>
  );
}
