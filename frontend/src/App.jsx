import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'
import Skills from './components/Skills.jsx'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar /> 
     <Hero />
     <About />     
     <Projects />  
      <Skills /> 
     <Resume />   
     <Contact  />                  
    </>
  )
}

export default App
