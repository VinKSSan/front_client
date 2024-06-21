import React, { useState } from "react";
import { findClientByID } from "../service/getService";

export default function BuscarClient(){

    const [clientId, setClientId] = useState("");
    const [clientData, setClientData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);


    const handleSearch = async ()=>{
        try{
            const data = await findClientByID(clientId);
            setClientData(data);
            setErrorMessage(null);
        }
        catch(error){
            console.log("erro ao buscar dados: ", error)
            setErrorMessage("Cliente não encontrado!")
            setClientData(null)
        }
    }

    return(
        <>
            <h1>Buscar Clinte</h1>
            <div>
                <h2>insira o id do cliente </h2>
                <input
                    type="text"
                    id="input_clientId"
                    value={clientId}
                    onChange={(e)=>{setClientId(e.target.value)}}
                />
                <button onClick={handleSearch}>buscar</button>
                <div>
                    {errorMessage && <p>{errorMessage}</p>}
                    {clientData && (
                        <div>
                            <h3>Data Client</h3>
                            <p>name: {clientData.name}</p>
                            <p>cpf: {clientData.cpf}</p>
                            <p>income: {clientData.income}</p>
                            <p>birth date: {clientData.birthDate}</p>
                            <p>children: {clientData.children}</p>
                        </div>
                    )}

                </div>
            </div>
        </>
    )

}