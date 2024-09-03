import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure Font Awesome CSS is imported
import "./Css/MovieCard.css"; // Import your CSS file
import { useMovieContext } from "../Context/GlobalContext";
import * as actions from "./ActionType";

const MovieControls = ({ movie, type }) => {
  const MovieContext = useMovieContext();

  return (
    <div className="movie-controls-container">
      <div className="inner-card-controls">
        {type === "watchlist" && (
          <>
            <button
              onClick={() =>
                MovieContext.MoviesDispatch({
                  type: actions.ADD_MOVIE_TO_WATCHED,
                  payload: movie,
                })
              }
              className="ctrl-btn"
            >
              <i className="fas fa-eye" />
            </button>
            <button
              onClick={() =>
                MovieContext.MoviesDispatch({
                  type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                  payload: movie.imdbID,
                })
              }
              className="ctrl-btn"
            >
              <i className="fas fa-times" />
            </button>
          </>
        )}
        {type === "Watched" && (
          <>
            <button
              onClick={() =>
                MovieContext.MoviesDispatch({
                  type: actions.MOVE_TO_WATCHLIST,
                  payload: movie,
                })
              }
              className="ctrl-btn"
            >
              <i className="fas fa-eye-slash" />
            </button>
            <button
              onClick={() =>
                MovieContext.MoviesDispatch({
                  type: actions.REMOVE_MOVIE_FROM_WATCHED,
                  payload: movie.imdbID,
                })
              }
              className="ctrl-btn"
            >
              <i className="fas fa-times" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieControls;
