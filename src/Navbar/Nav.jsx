import React, { useState } from "react";
import Link from "./Link";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "Not Found" },
  ];
  return (
    <nav className="bg-yellow-300 md:py-2">
      <div
        className="m-1 p-2 md:hidden inline-block"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <IoClose className="text-2xl" />
        ) : (
          <CiMenuBurger className="text-2xl" />
        )}
      </div>
      <ul
        className={
          open ? "block md:flex mx-6 my-2" : "hidden md:flex mx-6 my-2"
        }
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
