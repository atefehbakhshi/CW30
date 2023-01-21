import "./style.css";
import FooterLinks from "./item";

const Footer = () => {
  return (
    <div className="footer-links-container">
      <FooterLinks text="تماس با ما" />
      <FooterLinks text="اخبار سایت" />
      <FooterLinks text="گزارش تخلف" />
      <FooterLinks text="تبلیغات در وبلاگ ها" color="red" />
      <FooterLinks text="راهنما" />
      <FooterLinks text="ثبت وبلاگ جدید" />
      <FooterLinks text="فهرست وبلاگ ها" />
      <FooterLinks text="وبلاگ های بروز شده" />
    </div>
  );
};

export default Footer;
