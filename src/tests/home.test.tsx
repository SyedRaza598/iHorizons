import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import { useGetAllPokemonsQuery } from "../containers/pokemonReducers/reducerSlice";
import { iPokemonCard } from "../types/app";

jest.mock("../containers/pokemonReducers/reducerSlice");

const mockUseGetAllPokemonsQuery = useGetAllPokemonsQuery as jest.Mock;

describe("Home Component", () => {
  const mockData: iPokemonCard[] = [
    { name: "Pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
    { name: "Bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  ];

  beforeEach(() => {
    mockUseGetAllPokemonsQuery.mockClear();
  });

  it("renders loading state", () => {
    mockUseGetAllPokemonsQuery.mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true,
    });

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    mockUseGetAllPokemonsQuery.mockReturnValue({
      data: undefined,
      error: { message: "Failed to fetch" },
      isLoading: false,
    });

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText("Error fetching data")).toBeInTheDocument();
  });

  it("renders pokemon cards when data is fetched", () => {
    mockUseGetAllPokemonsQuery.mockReturnValue({
      data: { results: mockData },
      error: undefined,
      isLoading: false,
    });

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText("Poke React")).toBeInTheDocument();
    mockData.forEach((pokemon) => {
      expect(screen.getByText(pokemon.name)).toBeInTheDocument();
    });
  });

  it("renders correct number of pokemon cards", () => {
    mockUseGetAllPokemonsQuery.mockReturnValue({
      data: { results: mockData },
      error: undefined,
      isLoading: false,
    });

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const cards = screen.getAllByRole("link");
    expect(cards.length).toBe(mockData.length);
  });
});
