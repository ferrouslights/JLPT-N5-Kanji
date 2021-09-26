import './App.css';
import Header from './components/Header';
import Kanji from './components/Kanji';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Kanji />
      </Wrapper>
    </div>
  );
}

export default App;
