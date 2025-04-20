import { CartCounter } from "@/app/shopping-cart/componets/CartCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Counter Page",
};

const CounterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="text-7xl">Productos</span>
      <CartCounter value={20} />
    </div>
  );
};

export default CounterPage;
