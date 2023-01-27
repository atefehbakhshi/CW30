import "./App.css";
import PayInfo from "./components/PayInfo";
import CardsContainer from "./components/CardsContainer";
import { useState } from "react";
import { foodsInfo } from "./components/foodData";

function App() {
  const [foodscount, setFoodscount] = useState([]);

  const handleChangeCount = (newCount) => {
    const newFood = foodscount.filter((item) => item.id !== newCount.id);
    setFoodscount([...newFood, newCount]);
  };

  let totalPrice = 0;
  foodscount.map((food) => {
    totalPrice += food.foodCount * food.foodPrice;
  });

  return (
    <div className="app">
      <CardsContainer
        foods={foodsInfo}
        OnhandleChangeCount={handleChangeCount}
      />
      <PayInfo totalOrdersPrice={totalPrice} />
    </div>
  );
}

export default App;
