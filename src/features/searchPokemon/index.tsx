import { Card } from "components/common";
import { UseGetPokemon } from "features/pokemonList/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ResultProps {
  label: string;
  path: string;
}

export function SearchPokemon() {
  const { data, detailList, isLoading, isError, loadMore } = UseGetPokemon();

  // const [search, setSearch] = useState(false);

  const [query, setQuery] = useState("");

  const [result, setResult] = useState<ResultProps[]>([]);

  console.log(query);

  // Rendered twice 50 => 100 in HomePage/Pokemon List page, occur only in development mode

  const results: any[] | undefined = detailList?.filter((item) => {
    return item && item.name.toLowerCase().includes(query.toLowerCase());
  });

  //   console.log(results);

  const handleChange = (query: string) => {
    setQuery(query);
    setResult(results);

    if (query.length < 1) {
      setResult([]);
    }
  };

  const handleClearResult = () => {
    setResult([]);
    setQuery("");
  };

  if (isLoading && !data) return <div>Loading ...</div>;

  if (isError) return <div>Error loading Pokemon list</div>;

  const searchResult = detailList.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  console.log(searchResult);

  return (
    <Card>
      <div className="flex flex-col gap-3">
        <label>Search Pokémon</label>
        <input
          type="search"
          name=""
          id=""
          value={query}
          placeholder="Type Pokémon name"
          className="rounded-md h-1/2 text-black p-3"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div>
        {result && result.length > 0 && (
          <div className="bg-white border border-slate-300 rounded-b-md w-full px-3 overflow-y-scroll">
            <h4 className="mb-1">{searchResult.length} Pokémon found</h4>
            <button
              onClick={loadMore}
              disabled={isLoading}
              className="m-3 justify-center self-center bg-midnight text-ghostWhite hover:opacity-90"
            >
              {isLoading ? "Loading ..." : "Load More Pokémon "}
              {/* Load More Pokémon */}
            </button>

            <ul onClick={handleClearResult}>
              {detailList
                .filter((item) =>
                  item.name.toLowerCase().includes(query.toLowerCase())
                )
                .map((item) => (
                  <li key={item.name} className="gap-3">
                    <Link
                      to={`/pokemon/${item.name}`}
                      className="flex gap-3 py-1 mx-3 "
                    >
                      <img
                        src={item.sprites.other?.dream_world.front_default}
                        alt={item.name}
                        className="size-5"
                      />
                      <p> {item.name}</p>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
}
