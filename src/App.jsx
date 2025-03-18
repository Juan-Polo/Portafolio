import {
  Nav,
  Landing,
  AboutMe,
  Skills,
  Projects,
  Cv,
  Footer,
} from "./components/index";

function App() {
  return (
    <>
      <Nav />
      <main>
        <section id="home">
          <Landing />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="cv">
          <Cv />
        </section>
      </main>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default App;
