import React from 'react';
import Navbar from './Layout/Navbar';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Footer from './Layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
