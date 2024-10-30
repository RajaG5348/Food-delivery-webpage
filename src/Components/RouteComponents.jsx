import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import Signup from "./Signup";
import Forgetpwd from "./Forgetpwd";
import Home from "./Home";
import Menu from "./Menu";
import Cart from "./Cart";

function RouteComponents() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    // console.log(item)
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0)
       tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main/home" />} />
      <Route path="/main" element={<Layout size={cart.length} />}>
        <Route path="home" element={<Home />} />
        <Route
          path="menu"
          element={<Menu handleClick={handleClick} warning={warning} />}
        />
        <Route
          path="cart"
          element={
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          }
        />
        <Route path="log-in" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="fwd" element={<Forgetpwd />} />
      </Route>
      <Route path="*" element={<Navigate to="/main/home" />} />
    </Routes>
  );
}

export default RouteComponents;
