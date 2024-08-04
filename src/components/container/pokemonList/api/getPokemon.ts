import axios from "axios";
import {
  PokemonDetailProps,
  PokemonProps,
} from "components/container/pokemonList/types";

export async function fetchPokemonList(
  limit: number,
  offset: number
): Promise<PokemonProps[]> {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching Pokemon List: ${error}`);
    throw new Error("Failed to fetch Pokemon list");
  }
}

export async function fetchPokemonDetails(
  url: string
): Promise<PokemonDetailProps> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokemon Details: ${error}`);
    throw new Error(`Failed to fetch Pokemon Details`);
  }
}
