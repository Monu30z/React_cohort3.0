import { LogOut, ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-2 font-semibold ">
      <h1>SkyMart</h1>
      <div className="flex gap-5">
        <NavLink
          className={({ isActive }) => {
          return  isActive ? "text-yellow-500" : "";
          }}
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
           return isActive ? "text-yellow-500" : "";
          }}
          to={"/main/shop"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => {
          return  isActive ? "text-yellow-500" : "";
          }}
          to={"/main/about"}
        >
          About
        </NavLink>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2 border p-1">
          <p>Monu</p> |
          <p className="p-1 text-yellow-500">M</p>
        </div>

        <ShoppingCart />
        <LogOut />
      </div>
    </div>
  );
};

export default Navbar;
