import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState(null);

  const [scrollY, setScrollY] = useState(null)
  let throttle = false;

  const getProductData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");

      setProductData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredData = () => {
    console.log("filter is runing...");

    let result = productData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductData(result);
  };

  useEffect(() => {
    if (!searchData) return;

    let timeOut = setTimeout(() => {
      filteredData();
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [searchData]);


  // throttline 
  useEffect(()=>{
    let handleScroll = ()=>{
      if(throttle) return
         throttle = true;
      console.log("scroll triggerd");
      setScrollY(window.scrollY);
      setTimeout(()=>{
        throttle = false;
      },10000)
 
    }

    window.addEventListener("scroll",handleScroll);

    return ()=> window.removeEventListener("scroll",handleScroll)
  },[])






  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <h1>Debouncing</h1>

      <input
        className="border p-3 m-4"
        type="text"
        placeholder="Search product"
        onChange={(e) => setSearchData(e.target.value)}
      />
      <div className="text-ms ">
        {productData.map((val) => {
          return (
            <h1 className="p-3" key={val.id}>
              {val.title}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default App;
