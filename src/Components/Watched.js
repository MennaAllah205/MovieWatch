import React from "react";
import "./Css/Watched.css";
import { useMovieContext } from "../Context/GlobalContext";
import MovieCard from "./MovieCard";

const Watched = () => {
  const MovieContext = useMovieContext();
  const movieCount = MovieContext.Watched.length;

  return (
    <div className="Watched">
      <div className="container">
        <div className="heading">
          <h2 className="heading-container">
            Watched
            <span className="movie-counter">{movieCount} Movies</span>
          </h2>
        </div>
        {movieCount > 0 ? (
          <div className="movies-grid">
            {MovieContext.Watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="Watched" />
            ))}
          </div>
        ) : (
          <p>No movies in your watched list.</p>
        )}
      </div>
    </div>
  );
};

export default Watched;
