import React from "react";
import Card from "./Card";
import KanjiContainer from "./KanjiContainer.style";
import { kanjiList } from "./KanjiList";
import { CardStyle } from "./Card.style";



const Kanji = ({toggleFlashcard, flashcardState}) => {
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
                    flashcardState={flashcardState}
                    />
            </CardStyle>
            )}
        </KanjiContainer>
    )
}

export default Kanji;