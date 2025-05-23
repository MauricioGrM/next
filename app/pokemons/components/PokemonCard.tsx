import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeart } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { name, image, id } = pokemon;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image src={image} alt={name} width={80} height={80} priority={false} />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <p className="text-sm text-gray-100">John@Doe.com</p>
          <div className="mt-5">
            <Link href={`pokemon/${id}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              More Info
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link href="/account/campaigns" className="px-4 py-2 flex hover:bg-gray-100 items-center">
            <div className="text-red-600">
              <IoHeart />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">No favorite</p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
