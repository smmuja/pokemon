import { GetPokemonDetailByName } from "components/container/pokemonDetail/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export function UseGetPokemonDetail() {
  const { name } = useParams();

  const { data, isLoading, isError } = useQuery(
    [`pokemonDetail`, name],
    () => GetPokemonDetailByName(String(name))
    // {
    //   enabled: !!id,
    // }
  );

  return {
    data,
    isLoading,
    isError,
  };
}
