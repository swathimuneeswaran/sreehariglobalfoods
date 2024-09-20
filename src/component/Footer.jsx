import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Company_logo from "../assets/images/Company_logo.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={Company_logo} alt="Company Logo" />
            <h2>Shree Hari Global Foods</h2>
            <p> We specialize in high-quality dehydrated
              vegetable and fruit powders and flakes. Our innovative automated
              solar dryer works in any climate, day or night, to keep produce
              fresh and extend shelf life. We help farmers by turning their
              produce into valuable products and connecting them to global
              markets.
            </p>
            <div className="social-media1">
              <a
                href="https://www.instagram.com/shreehariglobalfoods_kannada/?igsh=MTh1bmJtZG9zcG9yNg%3D%3D"
                target="_blank"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.youtube.com/@ShreeHariGlobalFoods"
                target="_blank"
              >
                <YouTubeIcon />
              </a>
              <a href="https://wa.me/7338490894 " target="_blank">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Our Company</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Payment Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Cancellation and Refund</a>
              </li>
              <li>
                <a href="#">Shipping and Delivery Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-products">
            <h3>Products</h3>
            <ul>
              <li>
                <a href="#">Fruits Flakes & Powders</a>
              </li>
              <li>
                <a href="#">Vegetables Flakes & Powders</a>
              </li>
              <li>
                <a href="#">Leaf Flakes & Powders</a>
              </li>
              <li>
                <a href="#">Rose Flakes & Powders</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>

            <p>
              {" "}
              Plot No. 20/2, Chintamani Road, Mallimakanapura Village, Hoskote
              Taluk, Bengaluru 562122
            </p>
            <span>GSTIN: 29AFIFS2138E1ZX </span>
            <p>+91 7338490894</p>
            <p>shreehariglobalfoods@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Shree Hari Global Foods. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
