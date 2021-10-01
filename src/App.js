import './App.css';
import background from './assets/background3.jpg';
import pixilator from './helpers/pixilator.js';

function App() {
  const CONFIG = {
    to: document.getElementById('pixel_background_img'),
    from: document.getElementById('background_img'),
    scale: 50,
    maxHeight: 200,
    maxWidth: 200,
  };

  return (
    <>
      <img
        src={background}
        id='background_img'
        alt='background showing pokemon'
      />
      <canvas id='pixel_background_img'></canvas>
      {pixilator(CONFIG)}
    </>
  );
}

export default App;
