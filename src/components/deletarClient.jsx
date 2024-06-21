import React, { useState } from "react";
import { deleteClientByID } from "../service/deleteService";

export default function DeletarClient(){

    const [clientId, setClientId] = useState("");
    const [clientData, setClientData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);


    const handleSearch = async ()=>{
        try{
            const data = await deleteClientByID(clientId);
            setClientData(data);
            setErrorMessage(null);
        }
        catch(error){
            console.log("erro ao buscar dados: ", error)
            setErrorMessage("Cliente não deletado!")
            setClientData(null)
        }
    }

    return(
        <>
            <h1>Deletar Clinte</h1>
            <div>
                <h2>insira o id do cliente</h2>
                <input
                    type="text"
                    id="input_clientId"
                    value={clientId}
                    onChange={(e)=>{setClientId(e.target.value)}}
                />
                <button onClick={handleSearch}>Deletar</button>
                <div>
                    {errorMessage && <p>{errorMessage}</p>}
                    {clientData && (
                        <div>
                            <h3>Client deletado com sucesso</h3>
                        </div>
                    )}

                </div>
            </div>
        </>
    )

}