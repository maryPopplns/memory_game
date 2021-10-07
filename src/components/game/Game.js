import { useEffect, useState } from 'react';
import Card from '../card/Card.js';
import './game.css';

export default function Game(props) {
  const [allCards, setAllCards] = useState([]); // set when component mounts
  const [currentCards, setCurrentCards] = useState([]); // will be appended to the DOM
  const [allCurrentIndexes, setAllCurrentIndexes] = useState([]); // all indexes for this level
  const [selectedIndexes, setSelectedIndexes] = useState([]); // all idexes of Cards clicked
  const [level, setLevel] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(
    window.localStorage.getItem('highScore') || 0
  );

  function cardClickHandler(event) {
    console.log(event.currentTarget.getAttribute('index'));
    // current grabbing the indexes off of the cards, corretly mathing with allCurrentIndexes array
    // todo push the targeted
  }

  useEffect(() => {
    props.data.forEach((data, index) => {
      const CARD = (
        <Card
          onClick={cardClickHandler}
          key={index}
          index={index}
          data={data}
        />
      );
      setAllCards((prevState) => [...prevState, CARD]);
    });
  }, [props.data]);

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
      array.forEach((number) => FINAL_STATE.push(allCards[number]));
      setCurrentCards(FINAL_STATE);
    };

    if (level === 1) {
      const NUMBERS = NUMBER_GENERATOR(5);
      setAllCurrentIndexes(NUMBERS);
      STATE_SETTER(NUMBERS);
    }
    if (level === 2) {
      const NUMBERS = NUMBER_GENERATOR(10);
      setAllCurrentIndexes(NUMBERS);
      STATE_SETTER(NUMBERS);
    }
    if (level === 3) {
      const NUMBERS = NUMBER_GENERATOR(15);
      setAllCurrentIndexes(NUMBERS);
      STATE_SETTER(NUMBERS);
    }
    if (level === 4) {
      const NUMBERS = NUMBER_GENERATOR(20);
      setAllCurrentIndexes(NUMBERS);
      STATE_SETTER(NUMBERS);
    }
    if (level === 5) {
      const NUMBERS = NUMBER_GENERATOR(25);
      setAllCurrentIndexes(NUMBERS);
      STATE_SETTER(NUMBERS);
    }
    if (level === 6) {
      const NUMBERS = NUMBER_GENERATOR(30);
      setAllCurrentIndexes(NUMBERS);
      STATE_SETTER(NUMBERS);
    }
    if (level === 7) {
      const NUMBERS = NUMBER_GENERATOR(35);
      setAllCurrentIndexes(NUMBERS);
      STATE_SETTER(NUMBERS);
    }
    if (level === 8) {
      const NUMBERS = NUMBER_GENERATOR(40);
      setAllCurrentIndexes(NUMBERS);
      STATE_SETTER(NUMBERS);
    }
    if (level === 9) {
      const NUMBERS = NUMBER_GENERATOR(45);
      setAllCurrentIndexes(NUMBERS);
      STATE_SETTER(NUMBERS);
    }
    if (level === 10) {
      const NUMBERS = NUMBER_GENERATOR(50);
      setAllCurrentIndexes(NUMBERS);
      STATE_SETTER(NUMBERS);
    }
    // todo render cards depending on level youre on
  }, [level, allCards, props.data]);

  return (
    <>
      {/* todo header */}
      <button onClick={() => setLevel((prevState) => prevState + 1)}>
        level up
      </button>
      <div id='cards_container'>{currentCards}</div>
    </>
  );
}
