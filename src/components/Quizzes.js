// src/components/Quizzes.js

import React, { useState, useEffect } from "react";
import { getQuizzes } from "../services/quizService";

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await getQuizzes();
        setQuizzes(data);
      } catch (error) {
        console.error("Failed to fetch quizzes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Quizzes</h2>
      {quizzes.map((quiz, index) => (
        <div key={index}>
          <h3>{quiz.question}</h3>
          <ul>
            {quiz.incorrect_answers
              .concat(quiz.correct_answer)
              .map((answer, idx) => (
                <li key={idx}>{answer}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quizzes;
