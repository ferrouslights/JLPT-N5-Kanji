import styled from "styled-components";

export const CardStyle = styled.div`
    height: 300px;
    width: 250px;
    border-radius: 0 25px 0 25px;
    padding: 15px;
    flex: 1;
    text-align: center;
    box-shadow: 3px 3px 12px #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: white;
    transition: transform .5s;
    

    &:hover {
        transition: transform .25s;
        transform: rotate(-2.5deg);
    }
`

export const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Character = styled.h2`
    font-size: 5.5em;
    text-align: center;
    color: black;
    text-shadow: 1px 1px 2px #BC002D;
    display: flex;
    margin: auto;
    cursor: default;
`

export const Text = styled.p`
    font-size: 1rem;
    cursor: default;
`