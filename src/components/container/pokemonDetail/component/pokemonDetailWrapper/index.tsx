import { UseGetPokemonDetail } from "components/container/pokemonDetail/hooks";

export function ImageGalleryItem() {
  return (
    <>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        alt=""
        className="border p-4 hover:bg-lightGray"
      />
    </>
  );
}

export function PokemonDetailWrapper() {
  const queryString = window.location.pathname;

  const query = queryString.split("/pokemon/")[1];

  const { data, isLoading, isError } = UseGetPokemonDetail();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!data) {
    return (
      <div>
        No pokemon found with <b>"{query}"</b> name. Check your spelling.
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  console.log(data);

  return (
    <>
      <p>{data?.name}</p>
      <p>{data.id}</p>
      <p>{data.height}</p>
      <div className="flex flex-col items-center w-full md:w-1/2 border border-green">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
          alt=""
        />
      </div>
      <div>
        <h3>Image Gallery</h3>
        <div className="flex gap-3 overflow-x-scroll mx-5 ">
          <img src={data.sprites.back_default} alt="" />
          <img src={data.sprites.back_shiny} alt="" />
          <img src={data.sprites.front_default} alt="" />
          <ImageGalleryItem />
          <ImageGalleryItem />
          <ImageGalleryItem />
          <ImageGalleryItem />
          <ImageGalleryItem />
        </div>
      </div>
    </>
  );
}
