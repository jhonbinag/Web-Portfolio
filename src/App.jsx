import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Work from './pages/work';
import Contact from './pages/contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
