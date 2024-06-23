import styled from "styled-components";

export const PutSty = styled.section`
    box-sizing: border-box;
    background: rgba(0,0,0,0.5);
    padding: 2rem;
    height: 100vh;
    width: 100vw;
    .conteiner{
        height: 70vh;
        width: 100%; 
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-content: 'center';
        .insert_data {
            display: flex;
            justify-content: space-between;
            align-content: center;
            input{
                margin: 0;
                height: 2.5rem;
            }
        }
        button {   
            width: 25rem;
            background-color: rgba(0, 255, 255, 0.5); 
            color: lime;
            font-size:15pt;
            margin: 0 auto;
            transition: all ease .5s;
            &:hover  {
                cursor: pointer;
                padding: 0.1rem 1rem;
                color: blue;
                scale:1.2;
            } 
        }
        .painel {
            width: 100%;
            transition: all 1s ease;
            display: flex;
            justifyContent: space-between;
            alignItems: center;
            border: 2px solid lime; 
            &.clients {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax( 19.5%, 1fr));
                gap: 0.5%;
                padding: 16px;
            }
            .card_clients {
                display: flex;
                align-items: center;
                justify-content: center; 
                flex-direction: column;
                &:not(:first-child){
                    border-left: solid 1px lime;
                }
                h2{
                    padding-left: 1rem;
                    font-size:12pt;
                    width: 100%;
                }
                p{
                    font-size: 12pt;
                    color: cyan;
                }       
            }
        }
    }
`