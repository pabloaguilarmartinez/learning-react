import './App.css'
import { useEffect, useState } from 'react';

type CatFactResponse = {
  fact: string;
  length: number;
};

type CatImageResponse = {
  tags: string[];
  _id: string;
}

const CAT_ENDPOINT_RANDOM_FACT: string = 'https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

function App() {
  const [fact, setFact] = useState<string>();
  const [pathImage, setPathImage] = useState<string>();
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then((data: CatFactResponse) => {
        const { fact } = data;
        setFact(fact);
        const threeFirstWords = fact.split(' ', 3).join(' ');
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
          .then(res => res.json())
          .then((data: CatImageResponse) => {
            const { _id } = data;
            setPathImage(`/cat/${_id}/says/${threeFirstWords}?fontSize=50&fontColor=red`);
          });
      });
  }, []);
  return (
    <main>
      <h1>Kitty App</h1>
      <button>Get new fact</button>
      {fact && <p>{fact}</p>}
      {pathImage &&
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${pathImage}`}
          alt={`Image extracted using the first three words of ${fact}`}
        />
      }
    </main>
  );
}

export default App;
