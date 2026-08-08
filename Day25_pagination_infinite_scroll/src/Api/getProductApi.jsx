import axios from "axios";


export const getProducts = async(limit,pageParam)=>{
  
    try {
        console.log("page param ",pageParam);
        
        let res =await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`)
        return res.data
        
    } catch (error) {
        console.log("Error in Api call",error);
        
        
    }

    
}