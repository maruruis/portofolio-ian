import React from 'react';
import Navbar from './Layout/Navbar';
import Intro from './Components/Intro';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
    </div>
  );
}

export default App;
