import './App.css';
import pixelit from './pixel.js';
import background from './assets/background2.jpg';

function App() {
  return (
    <>
      <img
        src={background}
        id='background_img'
        alt='background showing pokemon'
      />
      <canvas id='pixel_background_img'></canvas>
    </>
  );
}

export default App;
