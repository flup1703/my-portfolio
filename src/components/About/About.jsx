import Image from "next/image";

export default function About() {
  return (
    <section className="max-[321px]:w-[320px]" id="about">
      <div className="container">
        <h2 className="scroll-m-20 text-5xl text-center font-semibold tracking-tight first:mt-0 text-(--main-title) max-[450px]:text-4xl">Обо мне</h2>
        <div className="flex gap-35 pt-5 max-[450px]:flex-col-reverse max-[380px]:items-center max-[450px]:gap-10 max-[770px]:flex-col-reverse max-[770px]:gap-10 max-[1030px]:gap-10">
          <div className="items-center max-w-[550px] leading-7">
            <div className="flex flex-col gap-2 pb-0">
              <h3 className="text-5xl font-semibold tracking-tight pb-3 max-[450px]:text-4xl">Minkin Maksim</h3>
              <h2 className="ml-4 text-2xl tracking-tight first:mt-0 text-(--main-muted-foreground) hover:text-(--main-foreground) max-[450px]:text-xl max-[450px]:ml-2">Frontend Developer</h2>
              <p className="pl-7 max-[450px]:pl-5 max-[770px]:w-[85vw]">
                Страстно увлекаюсь созданием красивых и функциональных пользовательских интерфейсов.
                Занимаюсь разработкой 2 года, имею 1+ релевантный опыт работы с современными фронтенд-технологиями.
              </p>
              <p className="pl-7 max-[450px]:pl-5 max-[770px]:w-[85vw]">
                Постоянно изучаю новые технологии и лучшие практики разработки.
                Люблю решать сложные задачи и создавать продукты, которые делают жизнь пользователей лучше.
              </p>
              <p className="pl-7 max-[450px]:pl-5 max-[770px]:w-[85vw]">
                В свободное время участвую в open-source проектах.
              </p>
            </div>
            <div>
              <h2 className="ml-3 text-2xl tracking-tight first:mt-0 pb-3 pt-3 text-(--main-title) max-[450px]:ml-2">О себе</h2>
              <p className="pl-7 max-[450px]:pl-5 max-[770px]:w-[85vw]">
                Разработкой занимаюсь больше года. За это время успел
                поучаствовать над разработкой одного проекта: платформа для
                обучения. Занимался настройкой проекта, писал SPA приложения и
                разные компоненты, проводил код-ревью, менторил коллег и
                учащихся на образовательной платформе, проводил стажировку для
                выпускников платформы, что дало возможность выбрать новых
                сотрудников для команды и способствовало их быстрому обучению и
                интеграции.
              </p>
            </div>

            <div>
              <h2 className="ml-3 text-2xl tracking-tight first:mt-0 pb-3 pt-3 text-(--main-title) max-[450px]:ml-2">Опыт работы: 1 год 2 месяца</h2>
              <p className="text-3xl tracking-tight first:mt-0 pl-6 font-bold pt-3 text-(--main-title) max-[450px]:pl-5">Strada</p>
              <a href="https://strada.one/" className="ml-8 pb-3 text-(--main-muted-foreground) hover:text-(--main-foreground) max-[450px]:ml-5">
                strada.one
              </a>
              <p className="pl-8 max-[450px]:pl-5 max-[770px]:w-[85vw]">
                Работал над онлайн-платформой для обучения с командой из 3
                frontend, 2 backend разработчиков. Отвечал за главную страницу,
                отображение контента на странице обучающихся и своего рода
                менторство.
              </p>
              <p className="ml-5 text-2xl tracking-tight first:mt-0 pb-3 pt-3 text-(--main-title) max-[450px]:ml-2">Достижения:</p>
              <ol className="flex flex-col pl-8 max-[450px]:pl-5 max-[770px]:w-[85vw] gap-3">
                <li>
                  - Доработал и поддерживал модуль профиля
                  и отображения информации и прогресса ученика платформы.
                </li>
                <li>
                  - Провел
                  редизайн страниц профиля с переработкой флоу и их рефакторингом.
                  Также провёл редизайн главных страниц и их рефакторингом.
                  Упростил флоу главной страницы.
                </li>
                <li>
                  - Проводил стажировки с
                  коллегами и ревью для выпускников, что дало возможность выбрать
                  новых сотрудников для команды.
                </li>
                <li className="text-(--main-muted-foreground) hover:text-(--main-foreground)">
                  Стек: HTML, CSS, JavaScript, TypeScript, React, React Router,
                  NextJS, Git, GitHub, Redux, Redux Toolkit, Jest, React Testing
                  Library, MUI, shadcn, API, Postman, Figma.
                </li>
              </ol>
            </div>
          </div>
          <div className="">
            <div className="pl-20 pt-10 max-[450px]:p-0 max-[450px]:flex max-[450px]:items-center max-[450px]:justify-center max-[450px]:pt-[20px] max-[770px]:flex max-[770px]:justify-center max-[770px]:items-center max-[770px]:pl-0 max-[1030px]:pl-0">
              <Image
                className="rounded-[50%]"
                src="https://github.com/flup1703.png"
                alt="user image"
                width={300}
                height={300}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
