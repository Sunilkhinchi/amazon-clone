import React from "react";
import Header from "./Header";
import Home from "./Home";
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Checkout from "./Checkout.js";

// import Checkout from "./Checkout";

function App() {
  // bem
  return (

    <Router>
    <div className="App">
  <Header />
  
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Checkout" element={<Checkout />} />
   </Routes>
   
    </div>

    </Router>   
    
  );  
}

export default App;
