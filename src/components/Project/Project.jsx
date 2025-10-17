import ProjectCard from "../ProjectCard/ProjectCard";

export default function Project() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="scroll-m-20 text-5xl text-center font-semibold tracking-tight first:mt-0 text-(--main-title) max-[450px]:text-4xl">Мои проекты</h2>
        <div className="grid grid-cols-(--project-grid-cols) md:grid-cols-(--md-project-grid-cols) md:p-5 mt-10 gap-10">
          <ProjectCard
            projectImage={"fas fa-tasks"}
            image={process.env.NODE_ENV === 'production' ? "todo.jpg" : '/todo.jpg'}
            projectName="Todo"
            description="Простенький приложение ToDO с LocalStorage"
            tags={["JavaScript", "TypeScript", "Tailwind", "Zustand", "LocalStorage"]}
            href={'Todo'}
            note=''
          />
          <ProjectCard
            projectImage={"fas fa-cloud"}
            image={process.env.NODE_ENV === 'production' ? "weather.jpg" : '/weather.jpg'}
            projectName="Weather"
            description="Простенькое приложение погоды с избранным"
            tags={["React", "JavaScript", "Tailwind", "Zustand", "LocalStorage", "API"]}
            href={'Weather'}
            note='Иногда требуется VPN'
          />
          <ProjectCard
            projectImage={"fas fa-address-card"}
            image={process.env.NODE_ENV === 'production' ? "Look profile.jpg" : "/Look profile.jpg"}
            projectName="Look a Profile"
            description="Простенький сайт для просмотра профиля на GitHub"
            tags={["React", "JavaScript", "Tailwind", "LocalStorage", "API"]}
            href={'LookProfile'}
            note=''
          />
        </div>
      </div>
    </section>
  );
}
