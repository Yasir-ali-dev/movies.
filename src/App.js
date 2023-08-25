import "./App.css";
import React from "react";
import MovieApp from "./movie.com/MovieApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Years from "./movie.com/component/Years";
import Genre from "./movie.com/component/Genre";
import { Rating } from "@mui/material";
import Comedy from "./movie.com/genre/Comedy";
import Drama from "./movie.com/genre/Drama";
import Thriller from "./movie.com/genre/Thriller";
import Biography from "./movie.com/genre/Biography";
import Adventure from "./movie.com/genre/Adventure";
import Fantasy from "./movie.com/genre/Fantasy";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieApp />} />
          <Route path="/years" element={<Years />} />
          <Route path="/genre" element={<Genre />}>
            <Route path="comedy" element={<Comedy />} />
            <Route path="drama" element={<Drama />} />
            <Route path="thriller" element={<Thriller />} />
            <Route path="biography" element={<Biography />} />
            <Route path="adventure" element={<Adventure />} />
            <Route path="fantasy" element={<Fantasy />} />
          </Route>
          <Route path="/rating" element={<Rating />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
