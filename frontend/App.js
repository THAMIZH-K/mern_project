import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      rating: 4.8,
      description: "A mind-bending thriller by Christopher Nolan.",
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Adventure",
      rating: 4.7,
      description: "A space exploration journey to save humanity.",
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action",
      rating: 4.9,
      description: "Batman battles the Joker in Gotham City.",
    },
  ]);

  return (
    <div className="App">
      <Navbar />
      <h1>🎥 Movie Review App</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
