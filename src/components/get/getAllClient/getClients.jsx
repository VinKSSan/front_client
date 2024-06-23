import React, { useEffect, useState } from "react";
import { findAllClients} from "../../../service/getService";

export default function GetClients(){

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
                <div key={c.id} className="card_clients">
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
        <div id="S2" className="conteiner all">
            <h1>Buscar pagina de clintes.</h1>
            <div className="insert_data">
                <div className="data">
                    <h2>insira o numero de clientes por pagina.</h2>
                    <input
                        type="text"
                        id="input_ncpp"
                        value={ncpp<=5?ncpp:"letra ou valor maior que 5 não"}
                        onChange={(e)=>{setNcpp(e.target.value)}}
                    />
                </div>
                <div className="data">
                    <h2>insira o numero da pagina</h2>
                    <input
                        type="text"
                        id="input_clientId"
                        value={ndp}
                        onChange={(e)=>{setNdp(e.target.value)}}
                    />
                </div>
            </div>
            <button onClick={handleSearch}>buscar</button>
            <div className="painel">
                {errorMessage && <p>{errorMessage}</p>}
                {clientData && (
                    <div className="painel clients">
                        {clients}
                    </div>
                )}
            </div>
        </div>
    )

}