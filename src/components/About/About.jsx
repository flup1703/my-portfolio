import "./about.css";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">Обо мне</h2>
        <div className="about-content">
          <div className="about-text">
            <section>
              <h3 className="about-name">Minkin Maksim</h3>
              <h2 className="about-profession">Frontend Developer</h2>
              <p>
                Страстно увлекаюсь созданием красивых и функциональных
                пользовательских интерфейсов. Имею 3+ года опыта работы с
                современными фронтенд технологиями.
              </p>
              <p>
                Постоянно изучаю новые технологии и лучшие практики разработки.
                Люлю решать сложные задачи и создавать продукты, которые делают
                жизнь пользователей лучше.
              </p>
              <p>
                В свободное время участвую в open-source проектах и пишу
                технические статьи.
              </p>
            </section>
            <section>
              <h2>О себе</h2>
              <p>
                Разработкой занимаюсь около года. За это время успел
                поучаствовать над разработкой одного проекта: платформа для
                обучения .Занимался настройкой проекта, писал SPA приложения и
                разные компоненты, проводил код-ревью, менторил коллег и
                учащихся на образовательной платформе, проводил стажировку для
                выпускников платформы, что дало возможность выбрать новых
                сотрудников для команды и способствовало их быстрому обучению и
                интеграции.
              </p>
            </section>

            <section>
              <h2>Опыт работы: 1 год 2 месяца</h2>
              <p className="work">Strada</p>
              <a href="https://strada.one/" className="work-website">
                strada.one
              </a>
              <p>
                Работал над онлайн-платформой для обучения с командой из 3
                frontend, 2 backend разработчиков. Отвечал за главную страницу,
                отображение контента на странице обучающихся и своего рода
                менторство. Достижения: - Доработал и поддерживал модуль профиля
                и отображения информации и прогресса ученика платформы. - Провел
                редизайн страниц профиля с переработкой флоу и их рефакторингом.
                Также провёл редизайн главных страниц и их рефакторингом.
                Упростил флоу главной страницы. - Проводил стажировки с
                коллегами и ревью для выпускников, что дало возможность выбрать
                новых сотрудников для команды.
                <span className="stack">
                  Стек: HTML, CSS, JavaScript, TypeScript, React, React Router,
                  NextJS, Git, GitHub, Redux, Redux Toolkit, Jest, React Testing
                  Library, MUI, shadcn, API, Postman, Figma.
                </span>
              </p>
            </section>
          </div>
          <div className="about-image">
            <div className="profile-image">
              <img
                className="about-image-logo"
                src="https://github.com/flup1703.png"
                alt="user image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
