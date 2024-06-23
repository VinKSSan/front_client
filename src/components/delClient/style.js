import styled from "styled-components";

export const DelSty = styled.section`
    box-sizing: border-box;
    background: rgba(0,0,0,0.5);
    padding: 2rem;
    height: 50vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;
    .data_insert{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    p{
        color: white;
    }
    .panel{
        width: 20%
    }
`
