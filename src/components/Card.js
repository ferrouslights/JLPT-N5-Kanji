import React from "react";
import { Character, CardWrapper } from "./Card.style";

const Card = (props) => {
    return (
        <CardWrapper>
            <Character>
                {props.character}
            </Character>
            <p>{props.onReading} | {props.kunReading}</p>
            <p>{props.meaning}</p>
        </CardWrapper>
    )
}

export default Card;
