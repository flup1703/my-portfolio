import ProjectCard from "../ProjectCard/ProjectCard";
import "./project.css";

export default function Project() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Мои проекты</h2>
        <div className="projects-grid">
          {/* <ProjectCard
            projectImage={"fas fa-shopping-cart"}
            image={""}
            projectName="Интернет-магазин"
            description="Полнофункциональный магазин с корзиной, фильтрами и поиском"
            tags={["React", "Redux", "Tailwind"]}
            href={'Shop'}
          />
          <ProjectCard
            projectImage={"fas fa-comments"}
            image={""}
            projectName="Мессенджер"
            description="Реал-тайм чат с комнатами и уведомлениями"
            tags={["Vue.js", "Socket.io", "Node.js"]}
            href={'Chat'}
          /> */}
          <ProjectCard
            projectImage={"fas fa-tasks"}
            image={"/todo.jpg"}
            projectName="Todo"
            description="Обычное приложение ToDO"
            tags={["JavaScript", "TypeScript", "Tailwind", "Zustand", "LocalStorage"]}
            href={'Todo'}
          />
          <ProjectCard
            projectImage={"fas fa-cloud"}
            image={"/weather.jpg"}
            projectName="Weather"
            description="Простенькое приложение погоды с избранным"
            tags={["React", "JavaScript", "Tailwind", "Zustand", "LocalStorage", "API"]}
            href={'Weather'}
          />
          <ProjectCard
            projectImage={"fas fa-address-card"}
            image={"/Look profile.jpg"}
            projectName="Look a Profile"
            description="Простенький сайт для просмотра профиля на GitHub"
            tags={["React", "JavaScript", "Tailwind", "LocalStorage", "API"]}
            href={'LookProfile'}
          />
          {/* <ProjectCard
            projectImage={"fas fa-film"}
            image={""}
            projectName="Film's"
            description="Простенький сайт с фильмами"
            tags={["React", "JavaScript", "Tailwind", "LocalStorage", "API"]}
            href={'Films'}
          /> */}
        </div>
      </div>
    </section>
  );
}
