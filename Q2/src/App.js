import "./App.css";
import HeaderBanner from "./components/HeaderBanner";
import CardsContainer from "./components/CardsContainer";
import Footer from "./components/footer";
import Logo from "./components/logo";

const App = () => {
  return (
    <div className="app-container">
      <Logo />
      <HeaderBanner />
      <div className="middle-text">
        <div className="hr"></div>
        <p className="weblog-text">وبلاگ های بروز شده</p>
        <div className="hr"></div>
      </div>
      <CardsContainer />
      <Footer />
    </div>
  );
};

export default App;
