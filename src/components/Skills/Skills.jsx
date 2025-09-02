import "./skills.css";
import SkillCard from "../SkillCard/SkillCard";
import '../../icons/Git.svg';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Мои навыки</h2>
        <div className="skills-grid">
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
