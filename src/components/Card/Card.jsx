import Button from "../Button/Button";
import "./Card.css"

function Card({ name, price, imgurl, description }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={imgurl} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>$ {price}</h3>
        <Button type text="Agregar al carrito"></Button>
      </div>
    </div>
  );
}
export default Card;