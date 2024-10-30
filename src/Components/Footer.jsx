import React from "react";
import logo from "../Assets/images/Mom kitchen logo.png";
import { Link } from "react-router-dom";
import play from "../Assets/images/app-logo2.png";
import "../Css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col col-1">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            assumenda labore maiores reiciendis nesciunt expedita dolorum quasi
            reprehenderit perspiciatis illum necessitatibus quibusdam cum illo,
            eligendi quis porro architecto optio dignissimos.
          </p>
        </div>
        <div className="col col-2">
          <h3 className="underline">Office</h3>
          <p>ECR Beach Road</p>
          <p>Thiruvanmiyur, Chennai</p>
          <p>TamilNadu, PIN 600041, India</p>
          <p className="email-id"> Official@Outlook.com</p>
          <h5>+91 0123456789</h5>
        </div>
        <div className="col col-3">
          <h3 className="underline">ForRestaurants</h3>
          <ul>
            <li>
              <Link>partner with us</Link>
            </li>
            <li>
              <Link>apps for you</Link>
            </li>

            <h4 className="underline">legal</h4>
            <li>
              <Link>privacy policy</Link>
            </li>
            <li>
              <Link>cookie policy</Link>
            </li>
          </ul>
        </div>
        <div className="col col-4">
          <h3 className="underline">LearnMore</h3>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>privacy</Link>
            </li>
            <li>
              <Link>security</Link>
            </li>
            <li>
              <Link>Terms & Conditions</Link>
            </li>
            <li>
              <Link>Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="col col-5">
          <h3 className="underline">News Letter</h3>
          <form>
            <i className="bi bi-envelope"></i>
            <input type="email" placeholder="enter your email" required />
            <button type="submit">
              <i className="bi bi-arrow-right"></i>
            </button>
          </form>
          <div className="social-icons">
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-linkedin"></i>
          </div>
          <div className="app">
            <img src={play} alt="img" />
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Copyright - 2023. website made by <span>Raja Ganesan.</span> All Rights
        Reserved .
      </p>
    </footer>
  );
}

export default Footer;
