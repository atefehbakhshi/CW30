import { useState } from "react";
import "./Card.css";

const Card = ({ name, price, img, onChangeCounte }) => {
  const [inputcount, setInputCount] = useState(0);

  const numberOfFood = {
    foodPrice: price,
    foodCount: 0,
    id: name,
  };

  const increaseHandler = () => {
    setInputCount(inputcount + 1);
    numberOfFood.foodCount = inputcount + 1;
    onChangeCounte(numberOfFood);
  };

  const decreaseHandler = () => {
    setInputCount(inputcount - 1);
    numberOfFood.foodCount = inputcount - 1;
    onChangeCounte(numberOfFood);
  };

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
            <p className="operator" onClick={increaseHandler}>
              +
            </p>
            <p>{inputcount}</p>
            <p className="operator" onClick={decreaseHandler}>
              -
            </p>
          </div>
        </div>
      </div>
      <p className="card-total-price">{price * inputcount} تومان</p>
    </div>
  );
};

export default Card;
