import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/banner";
import { useGetPokemonByIdQuery } from "../containers/pokemonReducers/reducerSlice";

const PokemonDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetPokemonByIdQuery(id!);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <>
      <Banner heading={data.name} />
      <div className="deetailCardContainer">
        <div className="pokemonDetailCard">
          <img src={data.sprites.front_default} alt={data.name} />
          <p>
            Name: <span>{data.name}</span>
          </p>
          <p>
            Height: <span>{data.height}</span>
          </p>
          <p>
            Weight: <span>{data.weight}</span>
          </p>
          <div className="types">
            <p>Types:</p>
            <div className="tags">
              {data.types?.map((type: { type: { name: string } }) => (
                <span key={type.type.name}>{type.type.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
