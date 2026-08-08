import { api } from "../../../config/api";


// export const loginUserApi = async (Credentials)=>{
//     try {
//         let res = await api.post("/auth/login",Credentials);
//         console.log("respone",res);
//         localStorage.setItem("accessToken",res.data.accessToken)
//         return res.data;
        
        
//     } catch (error) {
//         console.log("err",error);
        
        
//     } 
// };


// export const hydrateUser = async ()=>{
//     let token = localStorage.getItem("accessToken");
//     try {
//         let res = await api.get("/auth/me",{
//              headers: {
//     'Authorization': `Bearer ${token}`, // Pass JWT via Authorization header
//   }
//         });
//         console.log("respone from hydration api",res);
//         return res.data;
        
//     } catch (error) {
//         console.log("hydration error",error);
        
        
//     }

   
// };