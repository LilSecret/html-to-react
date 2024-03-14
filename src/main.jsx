import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header.jsx";
import CharacterRatings from "./character-ratings.jsx";
import CharacterCards from "./character-cards.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <CharacterRatings />
    <CharacterCards />
  </React.StrictMode>
);
