import React from "react";
import GetClients from "./getAllClient/getClients";
import GetClient from "./getClientFId/getClient";
import { SecGetClient } from "./getClientSty";

export default function GetC(){
    return(
        <SecGetClient>
            <GetClient/>
            <GetClients/>
        </SecGetClient>
    )
}