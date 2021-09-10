import './App.css';
import Header from './components/Header.style';
import Kanji from './components/Kanji';
import KanjiContainer from './components/KanjiContainer.style';

function App() {
  return (
    <div className="App">
      <Header />
      <KanjiContainer>
        <Kanji />
      </KanjiContainer>
    </div>
  );
}

export default App;
