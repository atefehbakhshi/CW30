import "./App.css";
import PayInfo from "./components/PayInfo";
import CardsContainer from "./components/CardsContainer";
import { useState } from "react";
import { foodsInfo } from "./components/foodData";

function App() {
  const [foods, setFoods] = useState(
    foodsInfo.map((i) => ({ ...i, count: 0 }))
  );

  const handleChangeCount = (name, incremenet) => {
    const newFoods = foods.map((item) => {
      if (item.name === name) {
        item.count = incremenet ? item.count + 1 : item.count - 1;
      }
      return item;
    });
    setFoods(newFoods);
  };

  let totalPrice = 0;
  foods.map((food) => {
    totalPrice += food.count * food.price;
  });

  return (
    <div className="app">
      <CardsContainer OnhandleChangeCount={handleChangeCount} foods={foods} />
      <PayInfo totalOrdersPrice={totalPrice} />
    </div>
  );
}

export default App;
