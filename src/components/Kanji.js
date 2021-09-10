import React from "react";
import CardStyle from "./Card.style";
import Card from "./Card";
import KanjiContainer from "./KanjiContainer.style";



const Kanji = () => {
    const kanjiList = [
        {id: 0,
        character: '日',
        onReading: 'にち、じつ',
        kunReading: 'ひ、び、か',
        meaning: 'Day, Sun',
        },  
        {id: 1,
        character: '一',
        onReading: 'いち',
        kunReading: 'ひと',
        meaning: 'One',
        },
        {id: 2,
        character: '国',
        onReading: 'こく',
        kunReading: 'くに',
        meaning: 'Country',
        },
        {id: 3,
        character: '人',
        onReading: 'じん、にん',
        kunReading: 'ひと',
        meaning: 'Person',
        },
        {id: 4,
        character: '年',
        onReading: 'ねん',
        kunReading: 'とし',
        meaning: 'Year (counter)',
        },
        {id: 5,
            character: '年',
            onReading: 'ねん',
            kunReading: 'とし',
            meaning: 'Year (counter)',
            }
        
        ]
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