// import { UseGetPokemon } from "../hooks";
import { UseGetPokemon } from "components/container/pokemonList/hooks";
import styles from "./poke.module.css";
import { Link } from "react-router-dom";

export function PokemonList() {
  const { data, isLoading, isError, detailList, loadMore } = UseGetPokemon();

  if (isLoading && !data) return <div>Loading ...</div>;
  if (isError) return <div>Error loading Pokemon list</div>;

  const typeClasses: { [key: string]: string } = {
    water: "bg-lightBlue",
    fire: "bg-red",
    grass: "bg-green",
    electric: "bg-yellow",
    psychic: "bg-purple",
    poison: "bg-black",
    flying: "bg-lighBlue",
    normal: "bg-gray",
    ground: "bg-tanYellow",
    fairy: "bg-pink",
    bug: "bg-green",
    // ice: "bg-cyan-500",
    // dragon: "bg-orange-500",
    // dark: "bg-black",
    // fairy: "bg-pink-500",
  };

  const getTypeClass = (types: Array<{ type: { name: string } }>): string => {
    const type = types[0]?.type.name;
    return typeClasses[type] || "bg-gray"; // Default class if type is not found
  };

  return (
    <>
      <div className="sticky top-12 bg-midnight text-ghostWhite p-3 ">
        <h1 className="mt-0">Pokemon List</h1>
        {detailList?.length} Pokemons found
      </div>
      <div className="m-1  p-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {detailList?.map((pokemon) => {
          const audio = new Audio(pokemon.cries.latest);
          audio.oncanplaythrough = function () {
            audio.play;
          };

          return (
            <div
              key={pokemon.name}
              className="rounded-md m-1 p-1 bg-lightGray "
              onClick={() => {
                audio.play();
              }}
            >
              {/* <h2>{pokemon.name}</h2> */}
              <div
                className="bg-midnight flex flex-col justify-center
               h-2/5 md:h-1/2"
              >
                <img
                  src={pokemon.sprites.other?.dream_world.front_default}
                  alt={pokemon.name}
                  className={`${styles.pokeHover} max-w-full  max-h-full`}
                />
              </div>
              <div className="flex justify-between bg-midnight text-ghostWhite  p-1 px-3 my-2 text-xl font-semibold">
                <p># {pokemon.id}</p>
                <p>{pokemon.name.toUpperCase()}</p>
              </div>
              {/* <img
                src={pokemon.sprites.other?.showdown.front_default}
                alt={pokemon.name}
              /> */}
              {pokemon.types.map((item) => (
                <button
                  className={`w-2/5 rounded-xl p-2 py-0 mr-2 text-ghostWhite ${getTypeClass(
                    pokemon.types
                  )}`}
                >
                  {item.type.name}
                </button>
              ))}
              <div className="p-3">
                <p>Height : {pokemon.height}</p>
                <p>Weight : {pokemon.weight}</p>
                <p>Base Experience: {pokemon.base_experience}</p>
                <p>Move: {pokemon.moves[0].move.name}</p>
                <p>Order: {pokemon.order}</p>
              </div>
              <div className="flex justify-center  items-center  text-center flex-row mx-3 my-2">
                <Link
                  to={`/pokemon/${pokemon.name}`}
                  className="text-ghostWhite w-full
                   bg-darkPurple px-4 py-2 rounded-md "
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center">
        <button
          className="m-3 justify-center self-center bg-midnight text-ghostWhite hover:opacity-90"
          onClick={loadMore}
          disabled={isLoading}
        >
          Load More Pokémon
        </button>
      </div>
    </>
  );
}
