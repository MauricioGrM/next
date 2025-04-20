"use client";
import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);
  return (
    <>
      <span className="text-7xl">{counter}</span>
      <div>
        <button
          onClick={() => setCounter(counter + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 mr-2"
        >
          Agregar producto
        </button>
        <button onClick={() => setCounter(counter - 1)} className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4">
          Remover producto
        </button>
      </div>
    </>
  );
};
