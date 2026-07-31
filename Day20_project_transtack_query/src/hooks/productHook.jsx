import { useQuery } from "@tanstack/react-query";
import getProductsDataApi from "../api/ProductApi";
import { useEffect, useState } from "react";

export const useProductApi = () => {
  const [filterdProduct, setFilterdProduct] = useState(null);
  const { isPending, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataApi,
    staleTime: 5000,
  });

  return {
    isPending,
    data,
    error,
    filterProducts,
    filterdProduct,
  };
};

export const useProduct = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let getProduct = async () => {
    let data = await getProductsDataApi();
    setProductsData(data);
    setFilteredProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  let filterProducts = (searchParams) => {
    let filterdData = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchParams.toLowerCase());
    });

    if (filterdData) {
      setFilteredProducts(filterdData);
    }

    console.log(filterdData);


  };
      return {
      productsData,
      setProductsData,
      filteredProducts,
      setFilteredProducts,
      isLoading,
      setIsLoading,
      filterProducts
    };
};
