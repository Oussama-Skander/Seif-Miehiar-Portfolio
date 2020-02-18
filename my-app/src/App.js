import React from 'react';
// import './App.scss';
import Navbar from './components/navbar';
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
    </div >
  );
}

export default App;
