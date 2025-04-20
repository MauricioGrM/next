import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

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
  return pokemons;
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons(650, 0);
  return (
    <div className="flex flex-col">
      <span className="text-7xl">Pokemons</span>
      <div className="grid grid-cols-2 gap-4">
        {pokemons.map(({ id, image, name }) => (
          <div key={id} className="flex flex-col items-center">
            <Image src={image} alt={name} width={100} height={100} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonsPage;
