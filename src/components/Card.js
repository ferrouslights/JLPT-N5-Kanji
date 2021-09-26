import React from "react";
import { Character, CardWrapper, Text } from "./Card.style";

const Card = (props) => {
    return (
        <CardWrapper>
            <Character>
                {props.character}
            </Character>
            {/* <Text>On | Kun</Text> */}
            <Text>{props.onReading} | {props.kunReading}</Text>
            <Text>{props.meaning}</Text>
        </CardWrapper>
    )
}

export default Card;
