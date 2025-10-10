import SkillCard from "../SkillCard/SkillCard";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="scroll-m-20 text-5xl text-center font-semibold tracking-tight first:mt-0 text-(--main-title) max-[450px]:text-4xl">Мои навыки</h2>
        <div className="grid grid-cols-(--skills-grid-cols) md:grid-cols-(--md-skills-grid-cols) mt-10 gap-10">
          <SkillCard
            title="HTML5 & CSS3"
            text="Семантическая верстка, Flexbox, Grid, анимации"
            icon={'fab fa-html5'}
          />
          <SkillCard
            title="JavaScript & TypeScript"
            text="ES6+, современный синтаксис, асинхронное программирование"
            icon={'fab fa-js'}
          />
          <SkillCard
            title="React & Redux"
            text="Хуки, контекст, роутинг, управление состоянием RTK RTL"
            icon={'fab fa-react'}
          />
          <SkillCard
            title="Vue.js"
            text="Composition API, Vuex, Vue Router, компоненты"
            icon={'fab fa-vuejs'}
          />
          <SkillCard
            title="Git & GitHub"
            text="Контроль версий, CI/CD, командная работа"
            icon={'fab fa-git-alt'}
          />
          <SkillCard
            title="Адаптивный дизайн"
            text="Mobile-first подход, кроссбраузерность"
            icon={'fas fa-mobile-alt'}
          />
          <SkillCard
            title="Figma & Pixso"
            text="Text..."
            icon={'fab fa-figma'}
          />
        </div>
      </div>
    </section>
  );
}
