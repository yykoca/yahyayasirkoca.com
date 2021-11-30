import { React, useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
// import Experience from './pages/Experience.jsx';
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [open, setOpen] = useState(false);
  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  


  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;


    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;

    setScrollPosition(position);
  };

  const toggleHeader = (direction, curScroll) => {
    const header = document.getElementById('header');
    if (direction === 1) {

      header.classList.add('sticky-top');
      // setOpen(!open);
      setOpen(true);
      prevDirection = direction;
      
      
    } else if (direction === 2 && curScroll > 52) { 
      
      //replace 52 with the height of your header in px
      
      header.classList.remove('sticky-top');
      // setOpen(!open)
      setOpen(false)
      // colEl.removeAttribute('in', 'true');
      prevDirection = direction;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header open={open} />
      <Home scrollPosition={scrollPosition} />
      {/* {scrollPosition} */}
      <About />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
