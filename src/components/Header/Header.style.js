import styled from "styled-components";

export const Nav = styled.nav`
    padding: 1rem;
    background: #fff;
    height: 60px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    position: sticky;
    box-shadow: 0px 0px 12px #000000;

`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1;
    width: 100%;
`

export const JapanDot = styled.div`
    height: 45px;
    width: 45px;
    background: #BC002D;
    align-self: center;
    justify-self: center;
    border-radius: 30px;

    @media screen and (max-width: 400px) {
        display: none;

    }

`

export const HeaderLogo = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    text-decoration: none;
    margin-right: auto;

    @media screen and (max-width: 400px) {
        font-size: 1.5rem;

    }
    @media screen and (max-width: 768px) {
        font-size: 2rem;

    }
`

export const HeaderToggle = styled.button`
    background: #BC002D;
    padding: 10px;
    height: 80%;
    border-radius: 40px;
    outline: none;
    border: solid 2px #fff;
    font-size: 1.5rem;
    color: #fff;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    display: flex;
    align-items: center;

    margin-left: auto;

    @media (hover: hover) {
        &:hover {
            transition: all 0.2s ease-in-out;
            background: #DF957C;
            color: #011827;
            transform: scale(1.1);
        }
    }

    @media screen and (max-width: 400px) {
        font-size: 1.5rem;

    }
`