import { UseGetPokemonDetail } from "features/pokemonDetail/hooks";
import styles from "./pokedetail.module.css";
import { Card } from "components/common";

interface ImageGalleryProps {
  imgUrl: string;
}
export function ImageGalleryItem(props: ImageGalleryProps) {
  const { imgUrl } = props;
  return (
    <>
      <img src={imgUrl} alt="" className="border size-60 hover:bg-lightGray" />
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

  // Unit converter
  const height = `${data.height / 10} m`;
  const weight = `${data.weight / 10} kg`;

  return (
    <div className={styles.background}>
      <h3 className="text-center"># {data.id}</h3>
      <h2 className="text-center sm:mb-5">{data?.name.toUpperCase()}</h2>
      <div className="flex flex-col sm:flex-row ">
        <div>
          <p className="font-semibold">Type</p>
          {data.types.map((item) => (
            <button
              key={item.type.name}
              className="block m-3 p-1 px-3 bg-midnight"
            >
              {item.type.name}
            </button>
          ))}
        </div>

        <img
          src={data.sprites.other?.home.front_default}
          alt={data.name}
          className="border-4 rounded-full p-3 border-y-gray border-x-midnight"
        />
        <div>
          <Card className="grid grid-cols-2 border gap-3 rounded-md mt-2">
            <div>
              <p className="font-semibold">Height</p>
              <p>{height}</p>
            </div>
            <div>
              <p className="font-semibold">Weight</p>
              <p>{weight}</p>
            </div>
            <div>
              <p className="font-semibold">Ability</p>
              {data.abilities.map((item) => (
                <p key={item.ability.name}>{item.ability.name}</p>
              ))}
            </div>
          </Card>
        </div>
      </div>
      <div className="p-3 m-3 bg-midnight text-ghostWhite rounded-md lg:w-1/2">
        <h3>Stats</h3>

        {data.stats.map((item) => (
          <div
            className="flex p-1 px-3 gap-3 justify-between"
            key={item.stat.name}
          >
            <div className="flex flex-col ">
              <label className="">{item.stat.name}</label>
              <progress
                className={styles.progress}
                value={item.base_stat}
                max={100}
              >
                {item.base_stat}
              </progress>
            </div>
            <span>{item.base_stat}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center w-full md:w-1/2 border border-green">
        <img
          src={data.sprites.other?.dream_world.front_default}
          alt={data.name}
        />
      </div>
      <div>
        <h3>Image Gallery</h3>
        <div className="flex gap-3 overflow-x-scroll mx-5 ">
          <img src={data.sprites.back_default} alt="" />
          <img src={data.sprites.back_shiny} alt="" />
          <img src={data.sprites.front_default} alt="" />

          <ImageGalleryItem imgUrl={data.sprites.back_default} />
          <ImageGalleryItem imgUrl={data.sprites.back_shiny} />
          <ImageGalleryItem imgUrl={data.sprites.front_default} />
          <ImageGalleryItem imgUrl={data.sprites.front_shiny} />
        </div>
      </div>
    </div>
  );
}
