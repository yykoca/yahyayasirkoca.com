import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
