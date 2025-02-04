import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_BASE_URL }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: () => "/pokemon",
    }),
    getPokemonById: builder.query({
      query: (id: string) => `/pokemon/${id}`,
    }),
  }),
});

export const { useGetAllPokemonsQuery, useGetPokemonByIdQuery } = pokemonApi;

export default pokemonApi;
