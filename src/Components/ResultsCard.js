import React from "react";
import * as actions from "./ActionType";
import "../Components/Css/ResultCard.css";
import { useMovieContext } from "../Context/GlobalContext";

const ResultsCard = ({ movie }) => {
  const MovieContext = useMovieContext();

  // Check if the movie is already in the watch list or watched list
  const storedMovie = MovieContext.WatchList.find(
    (o) => o.imdbID === movie.imdbID
  );
  const storedMovieWatched = MovieContext.Watched.find(
    (o) => o.imdbID === movie.imdbID
  );

  // Disable buttons based on the movie's presence in lists
  const WatchListDisabled = storedMovie || storedMovieWatched;
  const WatchedDisabled = storedMovieWatched;

  const addToWatchList = () => {
    MovieContext.MoviesDispatch({
      type: actions.ADD_MOVIE_TO_WATCHLIST,
      payload: movie,
    });
  };

  const addToWatched = () => {
    MovieContext.MoviesDispatch({
      type: actions.ADD_MOVIE_TO_WATCHED,
      payload: movie,
    });
    // Ensure movie is added to watch list as well
    if (!storedMovie) {
      MovieContext.MoviesDispatch({
        type: actions.ADD_MOVIE_TO_WATCHLIST,
        payload: movie,
      });
    }
  };

  return (
    <div className="result-card">
      <div className="movie-poster">
        {movie.Poster ? (
          <img src={movie.Poster} alt="movie-img" />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="movie-info">
        <div className="heading">
          <h3 className="title">{movie.Title}</h3>
          {movie.Year ? (
            <h3 className="release-date">{movie.Year}</h3>
          ) : (
            <div>--</div>
          )}
        </div>
        <div className="controls">
          <button disabled={WatchListDisabled} onClick={addToWatchList}>
            Add To Watch List
          </button>
          <button disabled={WatchedDisabled} onClick={addToWatched}>
            Add To Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
