import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import CardLinks from "./components/CardLinks";
import PhotoCarousel from "./components/imgCarousel";

function App() {
  return (
    <div className="App">
       <div>
          <Navbar />
          <CardLinks />
          
          <br></br>

          <PhotoCarousel />
        </div>
    </div>
  );
}

export default App;
