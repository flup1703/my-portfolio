import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Project from "../../components/Project/Project";
import Contacts from "../../components/Contacts/Contacts";

export default function Home() {
  const items = [
    { href: "#home", value: "Главная", icon: "fa fa-house" },
    { href: "#about", value: "Обо мне", icon: "fa-regular fa-circle-user" },
    { href: "#skills", value: "Навыки", icon: "fa-regular fa-pen-to-square" },
    { href: "#projects", value: "Проекты", icon: "fa-regular fa-folder-open" },
    { href: "#contact", value: "Контакты", icon: "fa fa-address-card" },
  ];
  return (
    <>
      <Navigation
        link={"https://github.com/flup1703"}
        logo={"https://github.com/flup1703.png"}
        header={"flup"}
        items={items}
      />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contacts />
    </>
  );
}
