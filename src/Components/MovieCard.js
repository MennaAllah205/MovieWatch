import React from "react";
import "./Css/MovieControls.css";
import MovieControls from "./MovieControls";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.Poster ? (
          <img src={movie.Poster} alt="movie-img" />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <MovieControls movie={movie} type={type} />
    </div>
  );
};

export default MovieCard;
