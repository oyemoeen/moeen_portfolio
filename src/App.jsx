import { useState } from "react";
import "./App.css";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import ProjectsPage from "../src/components/Project";
import Contact from "../src/components/Contact";
import viteLogo from "../public/vite.svg";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      {/* <Navbar/> */}
      <About />
      <Skills />
      <ProjectsPage />
      <Contact />
    </>
  );
}

export default App;
