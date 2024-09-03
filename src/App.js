import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WatchList from "./Components/WatchList";
import Watched from "./Components/Watched";
import AddPage from "./Components/AddPage";
import ContextProvider from "./Context/GlobalContext";

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
};

export default App;
