import React from "react";
import Card from "./Card";
import KanjiContainer from "./KanjiContainer.style";
import { kanjiList } from "./KanjiList";
import { CardStyle } from "./Card.style";



const Kanji = () => {
    return (
        <KanjiContainer>
            {kanjiList.map((kanji) =>
            <CardStyle className='item' key={kanji.id}>
                <Card
                    id={kanji.id}
                    character={kanji.character} 
                    onReading={kanji.onReading}
                    kunReading={kanji.kunReading}
                    meaning={kanji.meaning}
                    />
            </CardStyle>
            )}
        </KanjiContainer>
    )
}

export default Kanji;