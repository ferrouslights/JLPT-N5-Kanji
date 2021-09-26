import React, {useState} from 'react'
import { HeaderContainer, HeaderLogo, HeaderToggle, Nav, JapanDot, NavItem } from './Header.style'

const Header = () => {
    const [flashcard, setFlashcard] = useState(false)

    const toggleFlashcard = () => {
        setFlashcard(!flashcard)
    }

    return (
        <Nav>
            <HeaderContainer>
                    <HeaderLogo>
                        N5 Kanji Ninja 🥷
                    </HeaderLogo>
                    {/* Might Add this in later */}
                    {/* <JapanDot /> */}
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