import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AboutSection from "./components/about_section.jsx";
import About from "./layouts/about";
import Team from "./layouts/team";
import Contact from "./layouts/contact";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1 className='text-3xl font-bold'>Hello world!</h1> */}
      <About />
      <Team />
      <Contact />
      
    </div>
  );
}

export default App;
