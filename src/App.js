
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Kanji from './components/Kanji';
import Wrapper from './components/Wrapper';

function App() {
  const [flashcard, setFlashcard] = useState(false)

    const toggleFlashcard = () => {
        setFlashcard(!flashcard)
        console.log(flashcard);
    }


  return (
    <>
      <Header toggleFlashcard={toggleFlashcard} flashcardState={flashcard}/>
      <Wrapper>
        <Kanji toggleFlashcard={toggleFlashcard} flashcardState={flashcard}/>
      </Wrapper>
    </>
  );
}

export default App;
