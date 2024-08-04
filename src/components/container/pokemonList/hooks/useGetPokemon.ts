import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchPokemonDetails, fetchPokemonList } from "../api/getPokemon";
import {
  PokemonDetailProps,
  PokemonProps,
} from "components/container/pokemonList/types";

export function UseGetPokemon() {
  const [pokemonList, setPokemonList] = useState<PokemonProps[]>([]);
  const [detailList, setDetailList] = useState<PokemonDetailProps[]>([]);

  const [offset, setOffset] = useState(0);
  const limit = 50;

  const { data, isLoading, isError } = useQuery(
    [`pokemonList`, offset],
    () => fetchPokemonList(limit, offset),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    if (data) {
      setPokemonList((prevList) => [...prevList, ...data]);

      const fetchDetails = async () => {
        try {
          const detailsPromises = data.map((pokemon) =>
            fetchPokemonDetails(pokemon.url)
          );

          const detailsResponse = await Promise.all(detailsPromises);

          setDetailList((prevlist) => [...prevlist, ...detailsResponse]);
        } catch (error) {
          console.error(`Error fetching Pokemon details in batch:`, error);
        }
      };
      fetchDetails();
    }
  }, [data]);

  const loadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  //   if (isLoading && !data) return <div>Loading ...</div>;
  //   if (isError) return <div>Error loading Pokemon list</div>;

  return {
    data,
    isError,
    isLoading,
    loadMore,
    pokemonList,
    fetchPokemonDetails,
    detailList,
  };
}
