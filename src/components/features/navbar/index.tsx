import pokemon from "assets/logo/pokemon.png";
import pokemonLogoText from "assets/logo/pokemon-logo-text.png";
import { Link } from "react-router-dom";
import { SearchPokemon } from "features/searchPokemon";

export function Navbar() {
  return (
    <>
      <nav className="sticky top-0 bg-blue z-10">
        <Link to={"/"} className="flex items-start">
          <img src={pokemon} alt="pokemon logo" className="size-14" />
          <img src={pokemonLogoText} alt="pokemon logo text" />
        </Link>
        <SearchPokemon />
      </nav>
    </>
  );
}
