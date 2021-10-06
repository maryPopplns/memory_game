import { useEffect, useState } from 'react';

export default function Game(props) {
  const [currentCards, setCurrentCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [highScore, setHighScore] = useState(
    window.localStorage.getItem('highScore') || 0
  );

  useEffect(() => {
    const NUMBER_GENERATOR = (amount) => {
      const RANDOM_NUMBERS = [];
      while (RANDOM_NUMBERS.length < amount) {
        const RANDOM_NUMBER = Math.floor(Math.random() * 50);
        if (RANDOM_NUMBERS.indexOf(RANDOM_NUMBER) === -1)
          RANDOM_NUMBERS.push(RANDOM_NUMBER);
      }
      return RANDOM_NUMBERS;
    };

    const STATE_SETTER = (array) => {
      const FINAL_STATE = [];
      array.forEach((number) => FINAL_STATE.push(props.data[number]));
      setCurrentCards(FINAL_STATE);
    };

    if (level === 1) {
      const NUMBERS = NUMBER_GENERATOR(5);
      STATE_SETTER(NUMBERS);
    }
    if (level === 2) {
      const NUMBERS = NUMBER_GENERATOR(10);
      STATE_SETTER(NUMBERS);
    }
    if (level === 3) {
      const NUMBERS = NUMBER_GENERATOR(15);
      STATE_SETTER(NUMBERS);
    }
    if (level === 4) {
      const NUMBERS = NUMBER_GENERATOR(20);
      STATE_SETTER(NUMBERS);
    }
    if (level === 5) {
      const NUMBERS = NUMBER_GENERATOR(25);
      STATE_SETTER(NUMBERS);
    }
    if (level === 6) {
      const NUMBERS = NUMBER_GENERATOR(30);
      STATE_SETTER(NUMBERS);
    }
    if (level === 7) {
      const NUMBERS = NUMBER_GENERATOR(35);
      STATE_SETTER(NUMBERS);
    }
    if (level === 8) {
      const NUMBERS = NUMBER_GENERATOR(40);
      STATE_SETTER(NUMBERS);
    }
    if (level === 9) {
      const NUMBERS = NUMBER_GENERATOR(45);
      STATE_SETTER(NUMBERS);
    }
    if (level === 10) {
      const NUMBERS = NUMBER_GENERATOR(50);
      STATE_SETTER(NUMBERS);
    }
    // todo render cards depending on level youre on
  }, [level, props.data]);

  return (
    <>
      <div></div>
      <button
        onClick={() => {
          setLevel((prevState) => prevState + 1);
        }}
      ></button>
      {console.log(currentCards)}
    </>
  );
}