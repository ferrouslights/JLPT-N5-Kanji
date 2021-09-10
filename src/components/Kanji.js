import React from "react";
import CardStyle from "./Card.style";
import Card from "./Card";
import KanjiContainer from "./KanjiContainer.style";



const Kanji = () => {
    const kanjiList = [
        {id: 0,
        character: '日',
        onReading: 'ニチ、ジツ',
        kunReading: 'ひ、び、か',
        meaning: 'Day, Sun',
        },  
        {id: 1,
        character: '一',
        onReading: 'イチ',
        kunReading: 'ひと',
        meaning: 'One, 1',
        },
        {id: 2,
        character: '国',
        onReading: 'コク',
        kunReading: 'くに',
        meaning: 'Country',
        },
        {id: 3,
        character: '人',
        onReading: 'ジン、ニン',
        kunReading: 'ひと',
        meaning: 'Person',
        },
        {id: 4,
        character: '年',
        onReading: 'ネン',
        kunReading: 'とし',
        meaning: 'Year (counter)',
        },
        {id: 5,
        character: '大',
        onReading: 'ダイ、タイ',
        kunReading: 'おお',
        meaning: 'Large, Big',
        },
        {id: 6,
        character: '十',
        onReading: 'ジュウ',
        kunReading: 'とう',
        meaning: 'Ten, 10',
        },
        {id: 7,
        character: '出',
        onReading: 'シュツ、スイ',
        kunReading: 'で、だ、い',
        meaning: 'Exit, Leave',
        },
        {id: 8,
        character: '二',
        onReading: 'ニ、ジ',
        kunReading: 'ふた',
        meaning: 'Two, 2',
        },
        {id: 9,
        character: '本',
        onReading: 'ホン',
        kunReading: 'もと',
        meaning: 'Book, present, true, counter for long cylindrical things',
        },
        {id: 10,
        character: '中',
        onReading: 'チュウ',
        kunReading: 'なか、うち、あた',
        meaning: 'In, Inside, Middle, Mean, Center',
        },
        {id: 11,
        character: '長',
        onReading: 'チョウ',
        kunReading: 'なが、おさ',
        meaning: 'Long, Lead, Superior, Senior',
        },
        {id: 12,
        character: '三',
        onReading: 'サン',
        kunReading: 'み',
        meaning: 'Three, 3',
        },
        {id: 13,
        character: '時',
        onReading: 'ジ',
        kunReading: 'とき、どき',
        meaning: 'Time',
        },
        {id: 14,
        character: '行',
        onReading: 'コウ、ギョウ、アン',
        kunReading: 'い、ゆ、おこな',
        meaning: 'Going, Journey, Carry Out, Line, Row',
        },
        {id: 15,
        character: '見',
        onReading: 'ケン',
        kunReading: 'み',
        meaning: 'See, Hopes, Chances, Idea, Opinion',
        },
        {id: 16,
        character: '月',
        onReading: 'ゲツ、ガツ',
        kunReading: 'つき',
        meaning: 'Month, Moon',
        },
        {id: 17,
        character: '分',
        onReading: 'ブン、フン、ブ',
        kunReading: 'わ',
        meaning: 'Part, Minute of Time, Understand',
        },
        {id: 18,
        character: '後',
        onReading: 'ゴ、コウ',
        kunReading: 'のち、うし、あと',
        meaning: 'Behind, Back, Later',
        },
        {id: 19,
        character: '前',
        onReading: 'ゼン',
        kunReading: 'まえ',
        meaning: 'In Front, Before',
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