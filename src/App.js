import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MoviePage from "./pages/Movies";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";
import Favori from "./pages/Favori";
import Movies from "./pages/Movies";
import Komedi from "./pages/Komedi";
import Korku from "./pages/korku";
import UserListedMovies from "./pages/UserListedMovies";
import Detay from "./pages/Detay"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/favori" element={<Favori />} />
        <Route exact path="/macera" element={<Movies />} />
        <Route exact path="/komedi" element={<Komedi />} />
        <Route exact path="/korku" element={<Korku />} />
        <Route exact path="/detay/:id" element={<Detay />} />
      </Routes>
    </BrowserRouter>
  );
}
