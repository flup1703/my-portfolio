import Image from 'next/image';
import './navigation.css';

export default function Navigation() {
  return (
    <nav>
      <div className="container nav-container">
        <a href="https://github.com/flup1703" className="logo">
          <img className='logo-image' src='https://github.com/flup1703.png' alt='logo' width={50} height={50} />
          flup
        </a>
        <ul className="nav-links">
          <li>
            <a href="#home">Главная</a>
          </li>
          <li>
            <a href="#about">Обо мне</a>
          </li>
          <li>
            <a href="#skills">Навыки</a>
          </li>
          <li>
            <a href="#projects">Проекты</a>
          </li>
          <li>
            <a href="#contact">Контакты</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
