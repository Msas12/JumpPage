import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import CardLinks from "./components/CardLinks";
import PhotoCarousel from "./components/imgCarousel";
// import background from "./background3.png";

function App() {
  return (
    <div className="App">
       <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + './imgs/background3.png'})`, backgroundRepeat: 'no-repeat', width: "100vw",
   height: "100vh", backgroundSize:'cover', backgroundPosition:'center', WebkitBackgroundSize:'cover' }}>
          <Navbar />
          <CardLinks />
          
          <br></br>

          <PhotoCarousel />
        </div>
    </div>
  );
}

export default App;
