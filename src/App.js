import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/loading/Loading.js';
import Game from './components/game/Game.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const RANDOM_NUMBERS = [];
    while (RANDOM_NUMBERS.length < 50) {
      const RANDOM_NUMBER = Math.floor(Math.random() * 151) + 1;
      if (RANDOM_NUMBERS.indexOf(RANDOM_NUMBER) === -1)
        RANDOM_NUMBERS.push(RANDOM_NUMBER);
    }

    RANDOM_NUMBERS.forEach((number, index) => {
      (async function apiData() {
        try {
          const RESPONSE = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${number}`
          );
          const JSON = await RESPONSE.json();
          const NAME = JSON.species.name;
          const PICTURE = JSON.sprites.front_shiny;
          const DATA = { NAME, PICTURE };
          setData((prevState) => {
            return [...prevState, DATA];
          });
        } catch (error) {
          setIsLoading(false);
          console.log(error);
        }
      })();
    });
  }, []);

  useEffect(() => {
    if (data.length === 50) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [data]);

  return <main>{isLoading ? <Loading /> : <Game data={data} />}</main>;
}

export default App;
