import React, { useEffect, useState } from "react";
import { findAllClients, findClientByID } from "../service/getService";

export default function BuscarClients(){

    const [ncpp, setNcpp] = useState("");
    const [ndp, setNdp] = useState("");
    const [clientData, setClientData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [clients, setClients] = useState([])


    const handleSearch = async ()=>{
        try{
            const data = await findAllClients(ncpp, ndp);
            setClientData(data);
            setErrorMessage(null);
            console.log(clientData)
        }
        catch(error){
            console.log("erro ao buscar dados: ", error)
            setErrorMessage("Cliente não encontrado!")
            setClientData(null)
        }
    }

    useEffect(()=>{
        if(clientData){
            const clients = clientData.content;
        let listaClients = [];
        let conta = 0;
        clients.forEach(c => {
            conta+=1;
            listaClients.push(
                <div key={c.id}>
                    <h2>Cliente numero: {conta}</h2>
                    <p>{c.name}</p>
                    <p>{c.cpf}</p>
                    <p>{c.income}</p>
                    <p>{c.birthDate}</p>
                    <p>{c.children}</p>
                </div>
            )
        });
        setClients(listaClients)
        }
        console.log(clientData)
    },[clientData])



    return(
        <>
            <h1>Buscar Clintes.</h1>
            <div>
                <h2>insira o numero de clientes por pagina.</h2>
                <input
                    type="text"
                    id="input_ncpp"
                    value={ncpp}
                    onChange={(e)=>{setNcpp(e.target.value)}}
                />
                <h2>insira o numero da pagina</h2>
                <input
                    type="text"
                    id="input_clientId"
                    value={ndp}
                    onChange={(e)=>{setNdp(e.target.value)}}
                />
                <button onClick={handleSearch}>buscar</button>
                <div>
                    {errorMessage && <p>{errorMessage}</p>}
                    {clientData && (
                        <div>
                            <h3>Data Clients</h3>
                            {clients}
                        </div>
                    )}

                </div>
            </div>
        </>
    )

}