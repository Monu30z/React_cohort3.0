import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});


//  works as a middilewere in api responce
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("in intercepter ->", response);
        return response

    },
    (error)=>{
        console.log("in intercepter ->", error);
        
    }
)


// axiosInstance.interceptors.request.use(
//     (request)=>{
//         console.log("in intercepter ->", request);
//         return request

//     },
//     (error)=>{
//         console.log("in intercepter ->", error);
        
//     }
// )