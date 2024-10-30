import React, { useEffect, useState } from "react";
import logo from "../Assets/images/Mom kitchen logo.png";
import "../Css/Cart.css";
// import rice1 from "../Assets/images/rice images/riceImg1.jpg";

function Cart({ cart, setCart, handleChange }) {
  const [totalprice, setTotalprice] = useState(0);

  const handleTotalPrice = () => {
    let answer = 0;
    cart.map((item) => (answer += item.amount * item.price));

    setTotalprice(answer);
  };

  useEffect(() => handleTotalPrice());

  const handleRemove = (id) => {
    let arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  return (
    <div className="cart__box">
      <div className="cart__img">
        <img src={logo} alt="img" width={"100px"} />
        <h3>mom's kitchen</h3>
      </div>

      <div className="cart__col">
        {cart.map((item, index) => {
          return (
            <div className="cart__container" key={index}>
              <div className="cart__img">
                <img src={item.imgUrl} alt="img" width={"50px"} />
                <h4>{item.title}</h4>
              </div>
              <div className="cart__btn">
                <button onClick={() => handleChange(item, -1)}>-</button>
                <p>{item.amount}</p>
                <button onClick={() => handleChange(item, +1)}>+</button>
              </div>
              <div className="cart__price">
                <p>₹{item.price}</p>
                <span onClick={() => handleRemove(item.id)}>
                  <i className="bi bi-trash3"></i>
                </span>
              </div>
            </div>
          );
        })}
        {/* <div className="cart__container">
          <div className="cart__img">
            <img src={rice1} alt="img" width={"50px"} />
            <h4>veg pulov</h4>
          </div>
          <div className="cart__btn">
            <button>-</button>
            <p>5</p>
            <button>+</button>
          </div>
          <div className="cart__price">
            <p>250</p>
            <span>
              <i class="bi bi-trash3"></i>
            </span>
          </div>
        </div>
        <div className="cart__container">
          <div className="cart__img">
            <img src={rice1} alt="img" width={"50px"} />
            <h4>veg pulov</h4>
          </div>
          <div className="cart__btn">
            <button>-</button>
            <p>5</p>
            <button>+</button>
          </div>
          <div className="cart__price">
            <p>250</p>
            <span>
              <i class="bi bi-trash3"></i>
            </span>
          </div>
        </div> */}
        <hr />
        <div className="cart__total">
          <h5>Bill deatils</h5>
          <div className="cart__amt">
            <h6>item total</h6>
            <p>₹ {totalprice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
