import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import PokemonDetails from "../pages/pokemonDetails";
import { useGetPokemonByIdQuery } from "../containers/pokemonReducers/reducerSlice";

jest.mock("../containers/pokemonReducers/reducerSlice");

const mockUseGetPokemonByIdQuery = useGetPokemonByIdQuery as jest.Mock;

describe("PokemonDetails Component", () => {
  const mockData = {
    name: "Pikachu",
    sprites: { front_default: "pikachu.png" },
    height: 4,
    weight: 60,
    types: [{ type: { name: "electric" } }],
  };

  it("renders loading state", () => {
    mockUseGetPokemonByIdQuery.mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true,
    });

    render(
      <BrowserRouter>
        <PokemonDetails />
      </BrowserRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    mockUseGetPokemonByIdQuery.mockReturnValue({
      data: undefined,
      error: { message: "Failed to fetch" },
      isLoading: false,
    });

    render(
      <BrowserRouter>
        <PokemonDetails />
      </BrowserRouter>
    );

    expect(screen.getByText("Error fetching data")).toBeInTheDocument();
  });

  it("renders pokemon details when data is fetched", async () => {
    mockUseGetPokemonByIdQuery.mockReturnValue({
      data: mockData,
      error: undefined,
      isLoading: false,
    });

    render(
      <BrowserRouter>
        <PokemonDetails />
      </BrowserRouter>
    );

    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByAltText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Height: 4")).toBeInTheDocument();
    expect(screen.getByText("Weight: 60")).toBeInTheDocument();
    expect(screen.getByText("Types:")).toBeInTheDocument();
    expect(screen.getByText("electric")).toBeInTheDocument();
  });
});
