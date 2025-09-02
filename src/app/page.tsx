import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Project from "../components/Project/Project";
import Contacts from "../components/Contacts/Contacts";

export default function Home() {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contacts />
      </main>
    </>
  );
}
