import axiosInstance from "../config/axiosInstance";

  const getProductsDataApi = async () => {
    try {
      let res = await axiosInstance.get("/products");
      console.log("Productt Api is runing....");
      
  
      return res.data.products;
    } catch (error) {
      console.log("api error", error);
    }
  
  };

  export default getProductsDataApi;