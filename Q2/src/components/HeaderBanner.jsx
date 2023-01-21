import "./HeaderBanner.css";
import Signup from "./Signup";
import Login from "./Login";

const HeaderBanner = () => {
  return (
    <div className="header-banner-container">
      <Signup />
      <Login />
    </div>
  );
};

export default HeaderBanner;
