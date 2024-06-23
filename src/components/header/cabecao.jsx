import React from "react";

import Setinha from "./setinha/index";
import { Cabeca } from "./cabecaSty";
import logo from "../../log.svg"
import { Menu } from "./menu/menu";
import { Link } from "react-scroll";

export default function Cabecao(){
    return(
        <Cabeca>
            <Setinha/>
            <a href="https://vinsan-page.vercel.app/">
                <div style={{width: '185px', height: '110px'}}>
                    <img style={{width: '185px', height: '110px'}} src={logo} alt="logo"/>
                </div>
            </a>
            <Menu/>
        </Cabeca>
    )
}