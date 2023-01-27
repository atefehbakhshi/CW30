import "./Card.css";

const Card = ({ name, price, img, count, onChangeCounte }) => {
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
            <p className="operator" onClick={() => onChangeCounte(name, true)}>
              +
            </p>
            <p>{count}</p>
            <p className="operator" onClick={() => onChangeCounte(name, false)}>
              -
            </p>
          </div>
        </div>
      </div>
      <p className="card-total-price">{price * count} تومان</p>
    </div>
  );
};

export default Card;
