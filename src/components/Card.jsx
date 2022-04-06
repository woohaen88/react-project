function Card(props) {
  return (
    <div className="col-md-4">
      <img src={props.shoes.image} width="100%" alt="" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  );
}

export default Card;
