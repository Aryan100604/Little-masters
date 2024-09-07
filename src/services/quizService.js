// src/services/quizService.js

import axios from "axios";

const API_URL = "https://opentdb.com/api.php"; // Open Trivia Database URL

export const getQuizzes = async (category = "", difficulty = "easy") => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        amount: 10,
        category,
        difficulty,
        type: "multiple",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    throw error;
  }
};
