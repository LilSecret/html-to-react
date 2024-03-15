import React from "react";
import ReactDOM from "react-dom/client";

import { characters } from "./characters.jsx";
import Header from "./header.jsx";
import CharacterRatings from "./character-ratings.jsx";
import CharacterCards from "./character-cards.jsx";

import "./app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <CharacterRatings characters={characters} />
    <CharacterCards characters={characters} />
  </React.StrictMode>
);
