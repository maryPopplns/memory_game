export default function Card(props) {
  console.log(props.data);
  return (
    <>
      <img src={props.data.PICTURE} alt={props.data.NAME}></img>
      <h2>{props.data.NAME}</h2>
    </>
  );
}
