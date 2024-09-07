// src/services/puzzleService.js

import axios from "axios";

const SUDOKU_API_URL = "https://sudoku-api.com/api/sudoku"; // Replace with actual Sudoku API URL

export const getSudokuPuzzle = async (difficulty = "easy") => {
  try {
    const response = await axios.get(`${SUDOKU_API_URL}/${difficulty}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Sudoku puzzle:", error);
    throw error;
  }
};
