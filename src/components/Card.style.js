import styled from "styled-components";

const CardStyle = styled.div`
    position: relative;
    height: 300px;
    width: 250px;
    border-radius: 25px;
    padding: 15px:
    transition: 2s;
    flex: 1;
    text-align: center;
    box-shadow: 3px 3px 12px #000000;
    display: block;
    margin: auto;
    background: white;

    :hover {
        transform: rotate(-2.5deg);
    }
    `
export default CardStyle;


