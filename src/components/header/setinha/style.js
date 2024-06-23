import styled from "styled-components";

export const SetaSty = styled.svg`
    cursor: pointer;
    transform-origin: center
    &:hover {
        stroke:lime;
    }
`

export const BacSeta = styled.div`
    width: 40px;
    height: 40px;
    background-color:rgba(0,150,200,0.8);
    border: solid 0.5px cyan;
    border-radius:50%;
    z-index: 10;
    &:hover {
        padding:0.5rem;
        background-color:rgba(0,0,0,0.6);
        border: solid 0.5px lime;
    }
`