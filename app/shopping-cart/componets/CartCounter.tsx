"use client";
import { useState } from "react";

export const CartCounter = () => {
  const [counter, setCounter] = useState(0);
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
