import axios from "axios";

const BASE_URL = "http://localhost:8080/client";

export async function findClientByID(clientId){
   try{
    const response = await axios.get(`${BASE_URL}/${clientId}`);
    return response.data
   }
   catch(error){
        console.log("erro na requisição: ", error);
        throw error
   }
}

export async function findAllClients(ncpp, ndp){
   try{
    const response = await axios.get(`${BASE_URL}?size=${ncpp}&page=${ndp}`);
    return response.data
   }
   catch(error){
        console.log("erro na requisição: ", error);
        throw error
   }
}

