import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Home from './components/Home'
import Side from './components/Side'
import About from './components/About'
import Works from './components/Works'

function App() {

    const [activeSection, setActiveSection] = useState('/');

  return (
    <>
     <header>
        <Home />
      </header>
      <div className="flex flex-col-reverse lg:flex-row">
        <main className="w-full lg:w-7/8 py-4 px-2">
          {activeSection === 'about' && <About />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'works' && <Works />}
          {activeSection === 'contact' && <Contact />}
        </main>
        <aside className="hidden lg:block w-full lg:w-1/8 py-4 px-2">
          <Side activeSection={activeSection} setActiveSection={setActiveSection} />
        </aside>
      </div>
    </>
  )
}

export default App
