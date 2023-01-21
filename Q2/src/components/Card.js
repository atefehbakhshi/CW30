import "./Card.css";

const Card = ({ title, email, text }) => {
  return (
    <div className="card-container">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-email">{email}</h6>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;
