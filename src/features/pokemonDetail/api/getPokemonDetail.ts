import axios from "axios";
import { PokemonDetailProps } from "features/pokemonList/types";

export async function GetPokemonDetailByName(
  name: String
): Promise<PokemonDetailProps> {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokemon details: ${error} `);

    throw new Error(`Failed to fetch Pokemon details`);
  }
}

export async function GetPokemonDetail(
  id: Number
): Promise<PokemonDetailProps> {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokemon details: ${error} `);

    throw new Error(`Failed to fetch Pokemon details`);
  }
}

// Making API Call by pokemon name
// https://pokeapi.co/api/v2/pokemon/pikachu

// And convert it to corresponding pokemon id
// https://pokeapi.co/api/v2/pokemon/25
