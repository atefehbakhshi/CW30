import "./PayInfo.css";

const PayInfo = ({ totalOrdersPrice }) => {
  return (
    <div className="pay-info-container">
      <div className="pay-info">
        <p className="pay-info-title">جمع کل سفارشات:</p>
        <p className="pay-info-price">{totalOrdersPrice} تومان</p>
      </div>
      <div className="pay-info">
        <p className="pay-info-title">حق سرویس و کارمزد:</p>
        <p className="pay-info-price">0 تومان</p>
      </div>
      <div className="pay-info">
        <p className="pay-info-title">تخفیف:</p>
        <p className="pay-info-price">0 تومان</p>
      </div>
      <div className="total-price">
        <input type="text" placeholder="کد تخفیف" className="decrease-cost" />
        <div className="checkbox"></div>
      </div>
      <div className="pay-info total">
        <p className="pay-info-title">مبلغ قابل پرداخت</p>
        <p className="pay-info-price">0 تومان</p>
      </div>
      <button className="pay-info-button">ثبت سفارش</button>
    </div>
  );
};

export default PayInfo;
