import React from "react";
import { Character, CardWrapper, Text} from "./Card.style";

const Card = (props) => {
    return (
        <CardWrapper>
            {props.flashcardState ? <Text>{props.onReading} | {props.kunReading}</Text> : <Text></Text>}
            {/* <Text>{props.onReading} | {props.kunReading}</Text> */}

            <Character>
                {props.character}
            </Character>
            {/* <Text>On | Kun</Text> */}
            {props.flashcardState ? <Text>{props.meaning}</Text> : <Text></Text>}

            {/* <Text>{props.meaning}</Text> */}
        </CardWrapper>
        
    )
}

export default Card;
