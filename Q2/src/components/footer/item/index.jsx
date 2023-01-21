import "./style.css";
const FooterLinks = ({ text, color = "blue" }) => {
  return (
    <div>
      <a href="#" style={{ color }} className="footer-link">
        {text}
      </a>
    </div>
  );
};

export default FooterLinks;
