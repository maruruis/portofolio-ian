import React from 'react';
import Navbar from './Layout/Navbar';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import MyClients from './Components/MyClients';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Portfolio/>
      <MyClients/>
    </div>
  );
}

export default App;
