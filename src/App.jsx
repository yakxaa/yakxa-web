import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AboutSection from "./components/about_section.jsx";
import About from "./layouts/about";
import Team from "./layouts/team";
import Contact from "./layouts/contact";
import Newsletter from "./layouts/news";
import Demo from "./layouts/demo";
import PageLinks from "./components/page_links_list";
import Footer from "./layouts/footer";
import Landing from "./layouts/landing";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Landing />
      <Demo />
      <About />
      <Team />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
