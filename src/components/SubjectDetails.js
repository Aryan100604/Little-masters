// src/components/SubjectDetails.js

import React from "react";
import { useParams } from "react-router-dom";
import { staticData } from "../data"; // Import static data

const SubjectDetails = () => {
  const { subjectId } = useParams();
  const userClass = 1; // Example static class value
  const subject = staticData[userClass]?.subjects.find(
    (sub) => sub.id === subjectId
  );

  if (!subject) return <div>Subject not found</div>;

  return (
    <div className="subject-details">
      <h2>{subject.name}</h2>
      <div className="activities">
        <h3>Quizzes</h3>
        {/* Add links or components for quizzes */}
        <button>Quiz 1</button>
        <button>Quiz 2</button>
        {/* Repeat for other quizzes */}

        <h3>Puzzles</h3>
        {/* Add links or components for puzzles */}
        <button>Puzzle 1</button>
        <button>Puzzle 2</button>
        {/* Repeat for other puzzles */}

        <h3>Games</h3>
        {/* Add links or components for games */}
        <button>Game 1</button>
        <button>Game 2</button>
        {/* Repeat for other games */}
      </div>
    </div>
  );
};

export default SubjectDetails;
