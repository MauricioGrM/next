import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    (res) => res.json()
  );

  const pokemons = data.results.map((pokemon) => {
    const id = pokemon.url.split("/").at(-2) as string;
    const name = pokemon.name;
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    return {
      id,
      name,
      image,
    };
  });
  // throw new Error("Error al cargar los pokemons");
  return pokemons;
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons(650, 0);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons <small>estatico</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};

export default PokemonsPage;
