import React from "react";
import { Outlet, useNavigate } from "react-router";

const About = () => {

    const navigate= useNavigate()
  return (
    <div>
      <h1 className="text-black font-semibold">About page</h1>

      <button className="px-3 bg-orange-300 rounded-xl m-2" onClick={()=> navigate('/about/nested')}>Nested About</button>
      <Outlet />
    </div>
  );
};

export default About;
