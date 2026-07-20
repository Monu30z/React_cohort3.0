import React from "react";

const Navbar = ({setToggle}) => {
  return (
    <div className="flex justify-between items-center h-20 bg-gray-500 px-10">
      <div className="w-15 rounded">
        <img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
      </div>
      <div className="flex justify-between gap-10">
        <p className="font-semibold">Home</p>
        <p className="font-semibold">About</p>
        <p className="font-semibold">Contact</p>
      </div>
      <button className="p-2 rounded bg-blue-500 " onClick={()=> setToggle((prev) => !prev)}>Create User</button>
    </div>
  );
};

export default Navbar;
