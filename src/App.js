import { useEffect } from 'react';
import './App.css';

function App() {
  // todo state for loading
  // todo state for high score
  // todo state for current score
  // todo state for cards

  // todo useEffect for pulling all the card info
  useEffect(() => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
