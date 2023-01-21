import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <input className="login-input" type="text" placeholder="نام کاربری" />
        <input className="login-input" type="text" placeholder="رمز عبور" />
        <button className="login-button">ورود به بخش مدیریت وبلاگ</button>
      </form>
      <p className="login-text">کلمه عبور خود را فراموش کردم</p>
    </div>
  );
};

export default Login;
