import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import FilterForm from "./components/FilterForm.jsx";
import CompaniesList from "./components/CompaniesList.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
     <Nav></Nav>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      {/* filter form page */}
      <Route path="/filterform" element={<FilterForm/>}/>
      {/* comapanies list page */}
      <Route path="/companieslist" element={<CompaniesList/>}/>
     </Routes>
   </Router>
  );
}

export default App;
