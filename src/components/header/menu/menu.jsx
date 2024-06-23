
import React, { useState } from "react";
import icon_menu from "./icon-mobile.svg"
import { MeSec , ModMen ,  } from "./menuSty.js";
import { Link } from "react-scroll";

export function Menu() {
    const [isMode , setIsMode] = useState(false)

    function btnFuc() {
        setIsMode(!isMode)
    }

    return(
        <MeSec >
             <div className="BtnMen">
                <button id="ibtnMen" onClick={() => btnFuc()}>
                    <img src={icon_menu} alt="" />
                </button>
            </div>
            <ModMen disp={isMode}>
                <div className="secaoNav prymary">
                    <Link
                        to="S1"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800} 
                    >
                        <span>BuscarID</span>
                    </Link>
                </div>
                <div className="secaoNav second">
                    <Link
                        to="S2"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800}
                    >
                        <span>BuscarTodos</span>
                    </Link>
                </div>
                <div className="secaoNav terna">
                    <Link
                        to="S3"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800}
                    >
                        <span>Adicionar</span>
                    </Link>
                </div>
                <div className="secaoNav terna">
                    <Link
                        to="S4"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800}
                    >
                        <span>Atualizar</span>
                    </Link>
                </div>
                <div className="secaoNav terna">
                    <Link
                        to="S5"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800}
                    >
                        <span>Deletar</span>
                    </Link>
                </div>
            </ModMen>
        </MeSec>
    )
}