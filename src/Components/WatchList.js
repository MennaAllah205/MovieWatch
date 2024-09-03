import React from "react";
import "./Css/WatchList.css";
import { useMovieContext } from "../Context/GlobalContext";
import MovieCard from "./MovieCard";

const WatchList = () => {
  const MovieContext = useMovieContext();
  const movieCount = MovieContext.WatchList.length;

  return (
    <div className="watchlist">
      <div className="container">
        <div className="heading">
          <h2 className="heading-container">
            My Watch List
            <span className="movie-counter">{movieCount} Movies</span>
          </h2>
        </div>
        {MovieContext.WatchList.length > 0 ? (
          <div className="movies-grid">
            {MovieContext.WatchList.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <p>No movies in your watch list.</p>
        )}
      </div>
    </div>
  );
};

export default WatchList;
