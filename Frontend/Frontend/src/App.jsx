import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import FilterForm from "./components/FilterForm.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
     <Nav></Nav>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/filterform" element={<FilterForm/>}></Route>
     </Routes>
   </Router>
  );
}

export default App;
