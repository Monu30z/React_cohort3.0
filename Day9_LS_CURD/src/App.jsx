import React, { useState } from "react";
import Navbar from "./componenets/Navbar";
import Usercard from "./componenets/Usercard";
import Form from "./componenets/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || [];
  });


  const [updatedData, setUpdatedData] = useState(null)

  const deleteUser = (id) => {
    let filterUser = user.filter((ele ,idx)=> idx !==id)
    console.log(filterUser);
    setUser(filterUser)
    localStorage.setItem("user",JSON.stringify(filterUser));

  };

  


  console.log(updatedData);
  

  return (
    <div className="bg-gray-800 h-screen text-white p-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="p-4 flex flex-wrap gap-4">
        
          {user.map((elem) => {
            return <Usercard  key={elem.id} data={elem} setToggle={setToggle} deleteUser={deleteUser} setUpdatedData={setUpdatedData} />;
          })}
        </div>
      ) : (
        <div className="h-[70%] flex justify-center items-center">
          <Form updatedData={updatedData} user={user} setUser={setUser} setToggle={setToggle}  />
        </div>
      )}
    </div>
  );
};

export default App;
