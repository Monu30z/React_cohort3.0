import axios from "axios"

export const getUser =async ()=>{
    console.log("Api wala function chala");
    let res =await axios.get('https://fakestoreapi.com/users')
    console.log(res.data);
    
}