import "./CardsContainer.css";
import Card from "./Card";
import ceasar from "../assets/img/ceasar.png";
import french from "../assets/img/french_fries.png";
import hamburger from "../assets/img/hamburger.png";
import salad from "../assets/img/salad.png";
import soda from "../assets/img/soda.png";

const CardsContainer = () => {
  const foodsInfo = [
    {
      name: "همبرگر معمولی",
      price: 8000,
      quantity: 0,
      img: hamburger,
    },
    {
      name: "همبرگر مخصوص",
      price: 10000,
      quantity: 0,
      img: hamburger,
    },
    {
      name: "همبرگر معمولی با قارچ و پنیر",
      price: 10000,
      quantity: 0,
      img: hamburger,
    },
    {
      name: "همبرگر مخصوص با قارچ و پنیر",
      price: 2000,
      quantity: 0,
      img: hamburger,
    },
    {
      name: "سیب زمینی سرخ کرده ویژه",
      price: 25000,
      quantity: 0,
      img: french,
    },
    {
      name: "سیب زمینی سرخ کرده",
      price: 10000,
      quantity: 0,
      img: french,
    },
    {
      name: "نوشابه رژیمی",
      price: 6000,
      quantity: 0,
      img: soda,
    },
    {
      name: "نوشابه",
      price: 5000,
      quantity: 0,
      img: soda,
    },
    {
      name: "سالاد فصل",
      price: 8000,
      quantity: 0,
      img: salad,
    },
    {
      name: "سالاد سزار",
      price: 25000,
      quantity: 0,
      img: ceasar,
    },
  ];
  return (
    <div className="cards-container">
      <header className="cards-container-header">
        <h3> رستوران مک دونالد شعبه تهران</h3>
      </header>
      <main className="cards-container-main">
        <Card
          name={foodsInfo[0].name}
          price={foodsInfo[0].price}
          quantity={foodsInfo[0].quantity}
          img={foodsInfo[0].img}
        />
        <Card
          name={foodsInfo[1].name}
          price={foodsInfo[1].price}
          quantity={foodsInfo[1].quantity}
          img={foodsInfo[1].img}
        />
        <Card
          name={foodsInfo[2].name}
          price={foodsInfo[2].price}
          quantity={foodsInfo[2].quantity}
          img={foodsInfo[2].img}
        />
        <Card
          name={foodsInfo[3].name}
          price={foodsInfo[3].price}
          quantity={foodsInfo[3].quantity}
          img={foodsInfo[3].img}
        />
        <Card
          name={foodsInfo[4].name}
          price={foodsInfo[4].price}
          quantity={foodsInfo[4].quantity}
          img={foodsInfo[4].img}
        />
        <Card
          name={foodsInfo[5].name}
          price={foodsInfo[5].price}
          quantity={foodsInfo[5].quantity}
          img={foodsInfo[5].img}
        />
        <Card
          name={foodsInfo[6].name}
          price={foodsInfo[6].price}
          quantity={foodsInfo[6].quantity}
          img={foodsInfo[6].img}
        />
        <Card
          name={foodsInfo[7].name}
          price={foodsInfo[7].price}
          quantity={foodsInfo[7].quantity}
          img={foodsInfo[7].img}
        />
        <Card
          name={foodsInfo[8].name}
          price={foodsInfo[8].price}
          quantity={foodsInfo[8].quantity}
          img={foodsInfo[8].img}
        />
        <Card
          name={foodsInfo[9].name}
          price={foodsInfo[9].price}
          quantity={foodsInfo[9].quantity}
          img={foodsInfo[9].img}
        />
      </main>
    </div>
  );
};

export default CardsContainer;
