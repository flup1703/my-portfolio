import ProjectCard from "../ProjectCard/ProjectCard";
import "./project.css";

export default function Project() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Мои проекты</h2>
        <div className="projects-grid">
          <ProjectCard
            projectImage={"fas fa-tasks"}
            image={process.env.NODE_ENV === 'production' ? "/todo.jpg" : 'todo.jpg'}
            projectName="Todo"
            description="Обычное приложение ToDO"
            tags={["JavaScript", "TypeScript", "Tailwind", "Zustand", "LocalStorage"]}
            href={'Todo'}
          />
          <ProjectCard
            projectImage={"fas fa-cloud"}
            image={process.env.NODE_ENV === 'production' ? "/weather.jpg" : 'weather.jpg'}
            projectName="Weather"
            description="Простенькое приложение погоды с избранным"
            tags={["React", "JavaScript", "Tailwind", "Zustand", "LocalStorage", "API"]}
            href={'Weather'}
          />
          <ProjectCard
            projectImage={"fas fa-address-card"}
            image={process.env.NODE_ENV === 'production' ? "/Look profile.jpg" : "Look profile.jpg"}
            projectName="Look a Profile"
            description="Простенький сайт для просмотра профиля на GitHub"
            tags={["React", "JavaScript", "Tailwind", "LocalStorage", "API"]}
            href={'LookProfile'}
          />
        </div>
      </div>
    </section>
  );
}
