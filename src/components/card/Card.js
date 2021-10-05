import './card.css';

export default function Card(props) {
  console.log(props.data);
  return (
    <div className='pokemon_card'>
      <img
        className='pokemon_img'
        src={props.data.PICTURE}
        alt={props.data.NAME}
      ></img>
      <h2>{props.data.NAME}</h2>
    </div>
  );
}
