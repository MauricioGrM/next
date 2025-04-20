import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export const NavBar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 rounded">
      <Link className="flex items-center" href="/">
        <HomeIcon className="mr-2" />
        Home
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map(({ name, path }) => (
        <ActiveLink key={path} path={path} name={name} />
      ))}
    </nav>
  );
};
