import { useEffect, useState } from "react";
import offImg from "../Assets/images/offer.avif";
import offImg1 from "../Assets/images/offer2.avif";
import {
  AllDishMenu,
  GravieMenu,
  PastaMenu,
  RiceMenu,
  SoupMenu,
  StaterMenu,
} from "../Assets/Data/MenuCategory";
import "../Css/Menu.css";

function Menu({handleClick , warning}) {
  const [filter, setFilter] = useState("ALL-FOODS");
  const [product, setProduct] = useState(AllDishMenu);
  useEffect(() => {
    if (filter === "RICE-MENU") {
      setProduct(RiceMenu);
    }
    if (filter === "ALL-FOODS") {
      setProduct(AllDishMenu);
    }
    if (filter === "PASTA-MENU") {
      setProduct(PastaMenu);
    }
    if (filter === "GRAVIE-MENU") {
      setProduct(GravieMenu);
    }
    if (filter === "STATER-MENU") {
      setProduct(StaterMenu);
    }
    if (filter === "SOUP-MENU") {
      setProduct(SoupMenu);
    }
  }, [filter]);

  return (
    <section className="menu__bar">
      <div className="menu__items">
        <h3>Menu</h3>
        <div className="display__menu">
          <button
            onClick={() => {
              setFilter("ALL-FOODS");
            }}
          >
            all
          </button>
          <button
            onClick={() => {
              setFilter("RICE-MENU");
            }}
          >
            Rice
          </button>
          <button
            onClick={() => {
              setFilter("PASTA-MENU");
            }}
          >
            pasta's
          </button>
          <button
            onClick={() => {
              setFilter("GRAVIE-MENU");
            }}
          >
            gravie's
          </button>
          <button
            onClick={() => {
              setFilter("STATER-MENU");
            }}
          >
            stater's
          </button>
          <button
            onClick={() => {
              setFilter("SOUP-MENU");
            }}
          >
            soup's
          </button>
        </div>
      </div>
      <hr />

      <div className="offer">
        <h2>Deals for you</h2>
        <div className="offer__link">
          <div className="off__data">
            <img src={offImg} alt="img" />
            <div className="off__text">
              <h5>Extra ₹30 Off</h5>
              <p>Use order4family</p>
            </div>
          </div>
          <div className="off__data">
            <img src={offImg} alt="img" />
            <div className="off__text">
              <h5>50 Off</h5>
              <p>Use trynew</p>
            </div>
          </div>
          <div className="off__data">
            <img src={offImg1} alt="img" />
            <div className="off__text">
              <h5>Flat 10% Off</h5>
              <p>above coupons</p>
            </div>
          </div>
          <div className="off__data">
            <img src={offImg1} alt="img" />
            <div className="off__text">
              <h5>Flat 10% Off</h5>
              <p>above coupons</p>
            </div>
          </div>
        </div>
      </div>
      {product.map((item) => {
        return (
          <section className="menu__section" key={item.id}>
            <h2>{item.heading}</h2>
            <div className="menu__category" key={item.id}>
              <div className="menu__container">
                <div className="menu__content">
                  <h6>{item.title}</h6>
                  <span>₹ {item.price}</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor vel fugit impedit?
                  </p>
                </div>
              </div>
              <div className="menu__images">
                <img
                  src={item.imgUrl}
                  alt="img"
                  width={"100px"}
                  height={"100px"}
                />
                <button  onClick={()=> handleClick(item)}>Add</button>
              </div>
            </div>
          </section>
        );
      })}
      {
        warning && alert("item is already added to your cart")
      }
    </section>
  );
}

export default Menu;
