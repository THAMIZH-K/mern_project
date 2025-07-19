import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieCard;
