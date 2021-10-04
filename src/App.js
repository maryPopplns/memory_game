import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  // todo state for cards

  // todo state for high score
  // todo state for current score

  // todo useEffect for pulling all the card info
  useEffect(() => {
    const RANDOM_NUMBERS = [];
    while (RANDOM_NUMBERS.length < 20) {
      const RANDOM_NUMBER = Math.floor(Math.random() * 151) + 1;
      if (RANDOM_NUMBERS.indexOf(RANDOM_NUMBER) === -1)
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

  const SORTED = cards.sort((a, b) => {
    if (a.NAME < b.NAME) {
      return -1;
    }
    if (a.NAME > b.NAME) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div></div>
      {console.log(SORTED)}
    </>
  );
}

export default App;
