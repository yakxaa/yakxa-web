import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AboutSection from "./components/about_section.jsx";
import About from "./layouts/about";
import Team from "./layouts/team";
import Contact from "./layouts/contact";
import Newsletter from "./layouts/news";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <About />
      <Team />
      <Contact />
      <Newsletter />
    </>
  );
}

export default App;
