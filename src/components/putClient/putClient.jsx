import React, { useEffect, useState } from "react";
import { upClient } from "../../service/putService";
import { PutSty } from "./style";

export default function PutClient(){

    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [clientId, setClientId] = useState("");

    const [nameClient, setNameClient] = useState("");
    const [cpf, setCpf] = useState("");
    const [income, setIncome] = useState(0.0);
    const [birthDate, setBirthDate] = useState("");
    const [children, setChildren] = useState(0);

    const handleSearch = async ()=>{
        let body = {
            "name": nameClient,
            "cpf": cpf,
            "income": income,
            "birthDate": birthDate,
            "children": children
        }

        try{
            const dt = await upClient(clientId, body);
            setData(dt);
            setErrorMessage(null);
        }
        catch(error){
            console.log("erro ao buscar dados: ", error)
            setErrorMessage("Cliente não atualizado!")
            setData(null)
        }
    }
    useEffect(()=>{console.log(data)},[data])
    return(
        <PutSty id="S4">
            <h1>Atualizar Clinte</h1>
            <div className="conteiner" >
                 <div>
                    <h2>insira o id do cliente</h2>
                    <input
                        type="text"
                        id="name_client"
                        value={clientId}
                        onChange={(e)=>{setClientId(e.target.value)}}
                        />
                    </div>
                <div className="insert_data"> 
                    <div>
                        <h2>insira o nome do cliente</h2>
                        <input
                            type="text"
                            id="name_client"
                            value={nameClient}
                            onChange={(e)=>{setNameClient(e.target.value)}}
                        />
                    </div>
                    <div>
                        <h2>insira o cpf do cliente</h2>
                        <input
                            type="text"
                            id="cpf_client"
                            value={cpf}
                            onChange={(e)=>{setCpf(e.target.value)}}
                        />
                    </div>
                    <div>
                        <h2>insira o salário do cliente</h2>
                        <input
                            type="text"
                            id="income_client"
                            value={income}
                            onChange={(e)=>{setIncome(e.target.value)}}
                        />
                    </div>
                    <div>
                        <h2>insira a data de nascimento do cliente</h2>
                        <input
                            type="text"
                            id="birthDate_client"
                            value={birthDate}
                            onChange={(e)=>{setBirthDate(e.target.value)}}
                        />    
                    </div>
                    <div>
                        <h2>insira o numero de filhos do cliente</h2>
                        <input
                            type="text"
                            id="children_client"
                            value={children}
                            onChange={(e)=>{setChildren(e.target.value)}}
                        />    
                    </div>
                </div>
                <button onClick={handleSearch}>atualizar</button>
                <div>
                    {errorMessage && <p>{errorMessage}</p>}
                    {data && (
                        <div>
                            <h3>Cliente atualizado com sucesso</h3>
                            <p>name: {data.name}</p>
                            <p>cpf: {data.cpf}</p>
                            <p>income: {data.income}</p>
                            <p>birth date: {data.birthDate}</p>
                            <p>children: {data.children}</p>
                        </div>
                    )}

                </div>
            </div>
        </PutSty>
    )

}