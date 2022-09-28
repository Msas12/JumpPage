import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import CardLinks from "./components/CardLinks";

function App() {
  return (
    <div className="App">
       <div>
          <Navbar />
          <CardLinks />
        </div>
    </div>
  );
}

export default App;
