import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store";
import Home from "./pages/home";
import PokemonDetails from "./pages/pokemonDetails";
import "./assets/css/App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
