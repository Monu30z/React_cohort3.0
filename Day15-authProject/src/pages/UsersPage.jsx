import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosInstance";

const UsersPage = () => {
  const [userData, setUserData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const getUser = async () => {
    try {
      let res = await axiosInstance.get("/users");
      setUserData(res.data);
      console.log(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading)
    return <h1 className=" text-4xl ">User data is Loading ......</h1>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {userData.map((val) => (
        <UserCard key={val.id} user={val} />
      ))}
    </div>
  );
};

export default UsersPage;
