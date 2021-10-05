import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/Card.js';

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  // todo state for high score
  // todo state for current score

  useEffect(() => {
    const RANDOM_NUMBERS = [];
    while (RANDOM_NUMBERS.length < 10) {
      // const RANDOM_NUMBER = Math.floor(Math.random() * 151) + 1;
      const RANDOM_NUMBER = Math.floor(Math.random() * 700) + 1;
      if (RANDOM_NUMBERS.indexOf(RANDOM_NUMBER) === -1)
        RANDOM_NUMBERS.push(RANDOM_NUMBER);
    }

    RANDOM_NUMBERS.forEach((number) => {
      (async function apiData() {
        try {
          const RESPONSE = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${number}`
          );
          const JSON = await RESPONSE.json();
          const NAME = JSON.species.name;
          const PICTURE = JSON.sprites.front_shiny;
          const DATA = { NAME, PICTURE };
          setCards((prevState) => {
            return [...prevState, <Card data={DATA} />];
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
      {cards}
    </>
  );
}

export default App;
