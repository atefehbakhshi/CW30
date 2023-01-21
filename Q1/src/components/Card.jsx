import "./Card.css";
const Card = ({ name, price, quantity, img }) => {
  return (
    <div className="card">
      <div className="card-img-info">
        <div className="img-container">
          <img src={img} alt="food" />
        </div>
        <div className="food-info">
          <p className="food-title">{name}</p>
          <p className="food-price"> {price} تومان</p>

          <div className="food-quantity">
            <p className="operator">+</p>
            <p>{quantity}</p>
            <p className="operator">-</p>
          </div>
        </div>
      </div>
      <p className="card-total-price">{price * quantity} تومان</p>
    </div>
  );
};

export default Card;
