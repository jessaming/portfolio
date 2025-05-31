import { useState, useRef } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Side from "./components/Side";
import About from "./components/About";
import Works from "./components/Works";
import useIsLargeScreen from "./hooks/screen";
import ScrollToTop from "./components/ScrollToTop";
import Scroll from "./components/SmoothScroll";
import Footer from "./components/Footer";

function App() {
  const isLargeScreen = useIsLargeScreen();
  const [activeSection, setActiveSection] = useState("about");
  const contactRef = useRef(null);

  return (
    <>
      <Scroll />
      <header>
        <Home setActiveSection={setActiveSection} contactRef={contactRef} />
      </header>
      <div className="flex flex-col-reverse lg:flex-row">
        <main className="w-full lg:w-7/8 py-4 px-2">
          {isLargeScreen ? (
            <>
              {activeSection === "about" && <About />}
              {activeSection === "skills" && <Skills />}
              {activeSection === "works" && <Works />}
              {activeSection === "contact" && <Contact />}
            </>
          ) : (
            <>
              <About />
              <Skills />
              <Works />
              <Contact ref={contactRef} />
              <Footer />
            </>
          )}
        </main>
        <aside className="hidden lg:block w-full lg:w-1/8 py-4 px-2">
          <Side
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </aside>
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
