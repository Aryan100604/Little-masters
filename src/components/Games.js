// src/components/Games.js

import React, { useState, useEffect } from "react";
import { getGames } from "../services/gameService";

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getGames();
        setGames(data);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Games</h2>
      {games.map((game, index) => (
        <div key={index}>
          <h3>{game.name}</h3>
          {/* Render game details */}
        </div>
      ))}
    </div>
  );
};

export default Games;
