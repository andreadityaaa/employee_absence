import React, { useContext, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/homepage"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
