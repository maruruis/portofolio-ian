import React from 'react';
import Navbar from './Layout/Navbar';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
