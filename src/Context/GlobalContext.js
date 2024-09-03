import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../Components/reducer";

const initialState = {
  WatchList: JSON.parse(localStorage.getItem("watchlist")) || [],
  Watched: JSON.parse(localStorage.getItem("watched")) || [],
};

export const GlobalContext = createContext(initialState);
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.WatchList));
  }, [state.WatchList]);

  // Save Watched to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(state.Watched));
  }, [state.Watched]);
  return (
    <GlobalContext.Provider
      value={{
        WatchList: state.WatchList,
        Watched: state.Watched,
        MoviesDispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const useMovieContext = () => {
  return useContext(GlobalContext);
};
