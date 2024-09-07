// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Subject from "./components/Subject";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <h1 className="logo">Little Masters</h1>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="container">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/subject/:subject" element={<Subject />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
