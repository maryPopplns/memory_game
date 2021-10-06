import './card.css';

export default function Card(props) {
  return (
    <div className='pokemon_card'>
      <img
        className='pokemon_card_img'
        src={props.data.PICTURE}
        alt={props.data.NAME}
      ></img>
      <h2 className='pokemon_card_title'>{props.data.NAME}</h2>
    </div>
  );
}
