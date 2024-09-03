import * as actions from "./ActionType";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCHLIST:
      return {
        ...state,
        WatchList: [action.payload, ...state.WatchList],
      };

    case actions.REMOVE_MOVIE_FROM_WATCHLIST:
      return {
        ...state,
        WatchList: state.WatchList.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };

    case actions.MOVE_TO_WATCHLIST:
      return {
        ...state,
        Watched: state.Watched.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        WatchList: [action.payload, ...state.WatchList],
      };

    case actions.ADD_MOVIE_TO_WATCHED:
      return {
        ...state,
        WatchList: state.WatchList.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        Watched: [action.payload, ...state.Watched],
      };

    case actions.REMOVE_MOVIE_FROM_WATCHED:
      return {
        ...state,
        Watched: state.Watched.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };

    default:
      return state;
  }
};
