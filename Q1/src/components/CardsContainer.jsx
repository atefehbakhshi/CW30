import "./CardsContainer.css";
import Card from "./Card";

const CardsContainer = ({ foods, OnhandleChangeCount }) => {
  return (
    <div className="cards-container">
      <header className="cards-container-header">
        <h3> رستوران مک دونالد شعبه تهران</h3>
      </header>
      <main className="cards-container-main">
        {foods.map((food, ix) => (
          <Card
            key={food.name}
            name={food.name}
            price={food.price}
            img={food.img}
            count={food.count}
            onChangeCounte={OnhandleChangeCount}
          />
        ))}
      </main>
    </div>
  );
};

export default CardsContainer;
