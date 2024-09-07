// src/services/gameService.js
import axios from "axios";

// Example game API - Replace with actual API if available
const GAME_API_URL = "https://api.example.com/games";

export const getGames = async () => {
  try {
    const response = await axios.get(GAME_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};
