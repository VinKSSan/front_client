import axios from "axios";

const BASE_URL = "http://localhost:8080/client";

export async function addClient(body){
   try{
    const response = await axios.post(`${BASE_URL}`, body);
    return response.data
   }
   catch(error){
        console.log("erro na requisição: ", error);
        throw error
   }
}



