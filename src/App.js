import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  // todo state for cards

  // todo state for high score
  // todo state for current score

  // todo useEffect for pulling all the card info
  useEffect(() => {
    const RANDOM_NUMBERS = [];
    for (let i = 0; i < 20; i++) {
      const RANDOM_NUMBER = Math.floor(Math.random() * 151 + 1);
      RANDOM_NUMBERS.push(RANDOM_NUMBER);
    }

    RANDOM_NUMBERS.forEach((number) => {
      // todo fetch data
      (async function apiData() {
        try {
          const RESPONSE = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${number}`
          );
          const JSON = await RESPONSE.json();
          const NAME = JSON.species.name;
          const PICTURE = JSON.sprites.front_shiny;
          setCards((prevState) => {
            return [...prevState, { NAME, PICTURE }];
          });
        } catch (error) {
          console.log(error);
        }
      })();
    });
  }, []);

  return (
    <>
      <div></div>
      {console.log(cards)}
    </>
  );
}

export default App;
