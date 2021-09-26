import React, {useState} from 'react'
import { HeaderContainer, HeaderLogo, HeaderToggle, Nav } from './Header.style'

const Header = () => {
    const [flashcard, setFlashcard] = useState(false)

    const toggleFlashcard = () => {
        setFlashcard(!flashcard)
    }

    return (
        <Nav>
            <HeaderContainer>
                <HeaderLogo>
                    JLPT N5 Kanji 🥷
                </HeaderLogo>
                <HeaderToggle onClick={() => toggleFlashcard()}>
                    {flashcard ? 'Grid View' : 'Flashcard View'}
                </HeaderToggle>
                {/* <HeaderShuffle onClick={() => toggleFlashcard()}>
                    Shuffle
                </HeaderShuffle> */}
            </HeaderContainer>
        </Nav>
    )
}

export default Header
