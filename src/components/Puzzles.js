// src/components/Puzzles.js

import React, { useState, useEffect } from "react";
import { getSudokuPuzzle } from "../services/puzzleService";

const Puzzles = () => {
  const [puzzle, setPuzzle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPuzzle = async () => {
      try {
        const data = await getSudokuPuzzle();
        setPuzzle(data);
      } catch (error) {
        console.error("Failed to fetch puzzle:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPuzzle();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Sudoku Puzzle</h2>
      {/* Render the puzzle here */}
      <pre>{JSON.stringify(puzzle, null, 2)}</pre>
    </div>
  );
};

export default Puzzles;
