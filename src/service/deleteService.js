import axios from "axios";

const BASE_URL = "http://localhost:8080/client";

export async function deleteClientByID(clientId){
   try{
    const response = await axios.delete(`${BASE_URL}/${clientId}`);
    return true
   }
   catch(error){
        console.log("erro na requisição: ", error);
        throw error
   }
}

