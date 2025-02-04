import React from "react";
import { Link } from "react-router-dom";
import { useGetAllPokemonsQuery } from "../containers/pokemonReducers/reducerSlice";
import PokemonCard from "../components/pokemonCard";
import Banner from "../components/banner";
import { iPokemonCard } from "../types/app";

const Home: React.FC = () => {
  const { data, error, isLoading } = useGetAllPokemonsQuery(null);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error fetching data</p>;

  return (
    <>
      <Banner heading="Poke React" />
      <div className="cardsContainer">
        {data?.results.map((pokemon: iPokemonCard, index: number) => (
          <Link key={`${name} + ${index}`} to={`/pokemon/${index + 1}`}>
            <PokemonCard {...pokemon} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
