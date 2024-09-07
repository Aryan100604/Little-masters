// src/components/Subject.js
import React from "react";
import { useParams } from "react-router-dom";
import sampleData from "../data/sampleData";
import "../index.css";

function Subject() {
  const { subject } = useParams();
  const subjectData = sampleData[subject];

  if (!subjectData) {
    return <div>Subject not found.</div>;
  }

  return (
    <div className="page">
      <h1>{subjectData.name}</h1>
      <p>{subjectData.description}</p>
      <h2>Chapters</h2>
      <ul>
        {subjectData.chapters.map((chapter, index) => (
          <li key={index}>
            <h3>{chapter.name}</h3>
            <p>{chapter.description}</p>
            <div>
              <button>Quizzes</button>
              <button>Puzzles</button>
              <button>Games</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subject;
