import { baseApi } from "api";
import axios from "axios";
import { PokemonDetailProps, PokemonProps } from "features/pokemonList/types";

export async function fetchPokemonList(
  limit: number,
  offset: number
): Promise<PokemonProps[]> {
  try {
    console.log(baseApi);
    const response = await baseApi.get(
      `/pokemon?limit=${limit}&offset=${offset}`
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
