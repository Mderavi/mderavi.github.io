import logo from "./MahsaLogo-1.svg";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {a
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
