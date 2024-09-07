// src/components/Signup.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [classLevel, setClassLevel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <div className="page">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="class">Class Level:</label>
        <input
          type="text"
          id="class"
          value={classLevel}
          onChange={(e) => setClassLevel(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <div className="signup-login">
        <Link to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
}

export default Signup;
