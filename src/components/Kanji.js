import React from "react";
import CardStyle from "./Card.style";
import Card from "./Card";
import KanjiContainer from "./KanjiContainer.style";
import { kanjiList } from "./KanjiList";



const Kanji = () => {
    return (
        <KanjiContainer>
            {kanjiList.map((kanji) =>
            <CardStyle className='item'>
                <Card
                    key={kanji.id}
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