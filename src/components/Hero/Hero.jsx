import "./hero.css";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <h1>Frontend Developer</h1>
        <div>
          <p>Создаю современные, интуитивные и отзывчивые веб-приложения</p>
        </div>
        <div className="hero-buttons">
          <Button href="#projects" text="Мои работы" type="btn-primary" />
          <Button href="#contact" text="Связаться" type="btn-outline" />
        </div>
      </div>
      <div className="container hero-image">
        <div className="container main-image"></div>
      </div>
    </section>
  );
}
