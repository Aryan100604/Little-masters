// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import sampleData from "../data/sampleData";

function Home() {
  return (
    <div className="page">
      <h1>Home</h1>
      <div className="subject-cards">
        {Object.keys(sampleData).map((subject) => (
          <div key={subject} className="subject-card">
            <h2>{subject}</h2>
            <p>{sampleData[subject].description}</p>
            <Link to={`/subject/${subject}`}>View Chapters</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
