import React from "react";
import { iPokemonCard } from "../types/app";

const PokemonCard: React.FC<iPokemonCard> = ({ name }) => {
  return (
    <div className="pokemonCard">
      <p>{name}</p>
      {/* Can't display the images here as the response doesn't contains img url, instead it contains only url to check the details for a pokemon  */}
      {/* <img src={url} /> */}
    </div>
  );
};

export default PokemonCard;
