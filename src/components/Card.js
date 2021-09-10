import React from "react";
import Character from "./Character.style";

const Card = (props) => {
    return (
        <div>
            <Character>
                {props.character}
            </Character>
            <p>{props.onReading} | {props.kunReading}</p>
            <p>{props.meaning}</p>
        </div>
    )
}

export default Card;
