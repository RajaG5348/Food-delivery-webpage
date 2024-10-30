import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/images/Mom kitchen logo.png";
import "../Css/Navbar.css";
import { useEffect } from "react";

function Navbar({ size }) {
  // show menu
  const showMenu = () => {
    const toggle = document.getElementById("menu__icon"),
      nav = document.getElementById("nav_menu");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };

  // remove menu
  const removeMenu = () => {
    const nav = document.getElementById("nav_menu"),
      navLink = document.querySelectorAll(".nav_link");
    navLink.forEach((n) =>
      n.addEventListener("click", () => {
        nav.classList.remove("show");
      })
    );
  };

  useEffect(() => showMenu());
  useEffect(() => removeMenu());

  return (
    <header className="header">
      <nav className="nav bd_grid">
        {/* <!-- nav title anad logo --> */}
        <div className="nav_logo">
          <Link to="/">
            <img src={logo} alt="img" width={"100px"} />
          </Link>
        </div>

        {/* <!-- nav Links --> */}
        <div className="nav_menu " id="nav_menu">
          <ul className="nav_list">
            <li className="nav_items">
              <NavLink to="/" className="nav_link ">
                Home
              </NavLink>
            </li>
            <li className="nav_items">
              <NavLink to="/main/menu" className="nav_link ">
                Menu
              </NavLink>
            </li>
            <li className="nav_items">
              <NavLink to="/main/cart" className="nav_link">
                Cart
              </NavLink>
            </li>
          </ul>
        </div>

        {/* <!-- menu icons --> */}

        <div className="nav_toggle" id="nav_toggle">
          <span className="cart__icon">
            <Link to="/main/cart">
              <i className="bx bx-cart"></i>
            </Link>
          </span>
          <span className="cart__count">{size}</span>
          <span className="user__icon">
            <Link to="/main/log-in">
              <i className="bx bxs-user-circle"></i>
            </Link>
          </span>
          <span className="menu__icon" id="menu__icon" >
            <i className="bx bx-menu-alt-left"></i>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
