import dragonite from '../../assets/dragonite.png';
import './loading.css';

export default function Loading() {
  return (
    <>
      <img id='loading_img' src={dragonite} alt='dragonite'></img>
    </>
  );
}
