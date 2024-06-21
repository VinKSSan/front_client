import axios from "axios";

const BASE_URL = "http://localhost:8080/client";

export async function upClient(id, body){
   try{
    const response = await axios.put(`${BASE_URL}/${id}`, body);
    return response.data
   }
   catch(error){
        console.log("erro na requisição: ", error);
        throw error
   }
}



