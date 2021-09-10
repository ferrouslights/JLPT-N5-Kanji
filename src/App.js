import './App.css';
import Header from './components/Header.style';
import Kanji from './components/Kanji';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <Header />
        <Kanji />
    </Wrapper>
  );
}

export default App;
