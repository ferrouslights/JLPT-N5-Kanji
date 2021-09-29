import { HeaderContainer, HeaderLogo, HeaderToggle, Nav } from './Header.style'

const Header = ({toggleFlashcard, flashcardState}) => {

    return (
        <Nav>
            <HeaderContainer>
                    <HeaderLogo>
                        N5 Kanji Ninja 🥷
                    </HeaderLogo>
                    {/* Might Add this in later */}
                    {/* <JapanDot /> */}
                    <HeaderToggle onClick={() => toggleFlashcard()}>
                        {flashcardState ? 'Hide Info' : 'Show Info'}
                    </HeaderToggle>
                {/* <HeaderShuffle onClick={() => toggleFlashcard()}>
                    Shuffle
                </HeaderShuffle> */}
            </HeaderContainer>
        </Nav>
    )
}

export default Header
