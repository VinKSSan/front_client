import styled from "styled-components";




export const MeSec = styled.div`
    width:auto;
    padding: 0.5rem  1rem;
    right: 1.5rem;
    display:flex ;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.399) ;
    border-radius: 6px;
    z-index: 100;
    .BtnMen {
        z-index: 6;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .2s ease;
        button {
            cursor: pointer;
            width: auto;
            margin: 0;
            background-color: transparent;
            border: none;
        }
    }
    @media(max-width:560px) {
        flex-direction: row-reverse;
    }
   
`

export const ModMen  = styled.nav `
    position: ${({disp}) => (disp) && "fixed"};
    top:15vh;
    transition: all .5s ease;
    height: auto;
    margin: 5px;
    display: ${({disp}) => (disp) ? "flex" : "none"};
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    transition: all 1s ease;
    .secaoNav {
        padding: 2px;
        z-index: 7;
        width: 100%;
        height: 2.5rem;
        background-color:  rgba(250 ,250, 250, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        border: solid 1px rgba(0 ,0, 0, 0.199);
        cursor: pointer;
        span {
            color: rgba(0 ,100, 50, 1);
            text-align: center;
            align-items: center;
        }
        &:hover{
            background-color:  rgba(250 ,250, 250, 0.699);
            border: solid 1px rgba(0 ,0, 0, 1);
            span{
                color:lime;
            }
        }
    }
    @media(max-width:560px) {
        flex-direction: row-reverse;
        .secaoNav {
            padding: 0rem 1rem;
            margin: 0rem 0.2rem;
        }
    }
    @media(max-width:375px) {
        .secaoNav {
            span {
                font-size: 6pt;
            }
        }
    }
`