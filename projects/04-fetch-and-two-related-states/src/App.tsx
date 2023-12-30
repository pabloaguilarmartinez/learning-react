import './App.css';
import { useCatImage } from './hooks/useCatImage.ts';
import { useCatFact } from './hooks/useCatFact.ts';

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });
  const handleClick = () => {
    refreshFact();
  };
  return (
    <main>
      <h1>Kitty App</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl &&
        <img
          src={imageUrl}
          alt={`Image extracted using the first three words of ${fact}`}
        />
      }
    </main>
  );
}

export default App;
