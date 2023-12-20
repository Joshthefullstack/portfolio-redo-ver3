import "./app.scss"
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <section id="Homepage"><Navbar/></section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contacts">Contacts</section>
    </div>
  );
}

export default App;
