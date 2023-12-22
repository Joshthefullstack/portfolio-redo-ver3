import "./app.scss";
import { useState, useEffect} from "react";
import Contacts from "./components/Contacts/Contacts";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Cursor from "./components/Cursor/Cursor";
import ParallaxSkills from "./components/ParallaxSkills/ParallaxSkills";
import Skills from "./components/Skills/Skills";
import Loading from "./Loading/Loading";

function App() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 5300)
  }, [])
  if (loading) {
      return <Loading/>
  }


  return (
    <div className="App">
      <Cursor/>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
       <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Skills">
        <ParallaxSkills />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio/>
      <section id="Contacts"><Contacts/></section>
    </div>
  );
}

export default App;
