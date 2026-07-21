import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex rounded-xl bg-slate-500 justify-between items-center p-4">
      <h1>Logo</h1>
      <div className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <button className="px-2 py-1 bg-blue-500 rounded">Login</button>
    </div>
  );
};

export default Navbar;
