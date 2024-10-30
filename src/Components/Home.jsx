import pic from "../Assets/images/Hero.png";
import "../Css/Home.css";
import MainImg1 from "../Assets/images/recipe logo img/img1.png";
import MainImg2 from "../Assets/images/recipe logo img/img2.png";
import MainImg3 from "../Assets/images/recipe logo img/img3.png";
import MainImg4 from "../Assets/images/recipe logo img/img4.png";
import MainImg5 from "../Assets/images/recipe logo img/img5.png";
import homeImg1 from "../Assets/images/home__img1.png";
import homeImg2 from "../Assets/images/home__img2.png";
import homeImg3 from "../Assets/images/home__img3.png";
import { useNavigate } from "react-router-dom";


function Home() {

  const navigate = useNavigate();
  const recipeLogo = [
    { Recipe: "Rice", imgUrl: MainImg1 },
    { Recipe: "Gravie's", imgUrl: MainImg2 },
    { Recipe: "Pasta's", imgUrl: MainImg3 },
    { Recipe: "starter's", imgUrl: MainImg4 },
    { Recipe: "Soup's", imgUrl: MainImg5 },
  ];

  const homeImg = [
    {
      id:1,
      title: "Quick Delivery",
      imgUrl: homeImg1,
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, aut! Aut quis optio earum veritatis",
    },
    {
      id:2,
      title: "Dine In",
      imgUrl: homeImg2,
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, aut! Aut quis optio earum veritatis",
    },
    {
      id:3,
      title: "easy to picup",
      imgUrl: homeImg3,
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, aut! Aut quis optio earum veritatis",
    },
  ];
  return (
    <div>
      <section className="home section">
        <div className="row">
          <div className="col-1">
            <h5>Easy way to make order</h5>
            <h2>
              <span>Hungry ?</span>Just wait <br /> food at
              <span>your door</span>
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
              aut! Aut quis optio earum veritatis
            </p>
            <div className="home__btn">
              <button className="order__btn" onClick={()=>navigate('/main/menu')}>
                order now <i className="bi bi-caret-right"></i>
              </button>
            </div>
            <div className="hero__service">
              <p className="hero__ico">
                <i className="bi bi-truck"></i>
                <span>No Shipping Charge</span>
              </p>

              <p className="hero__ico ">
                <i className="bi bi-shield-check"></i>
                <span>100% secure Payment</span>
              </p>
            </div>
          </div>
          <div className="col-2">
            <img src={pic} alt="img" />
          </div>
        </div>
      </section>

      <section>
        <div className="recipe__box">
          {recipeLogo.map((item, index) => {
            return (
              <div className="recipe__menu" key={index}>
                <img src={item.imgUrl} alt="img"  />
                <h6>{item.Recipe}</h6>
              </div>
            );
          })}
        </div>
      </section>

      <section className="home-text">
        <div className="text_center">
          <h5>what we serve</h5>
          <h2>order your food while sitting at home</h2>
          <h2>
            we will <span>take care of it</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            dolor.offciis ?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. aperiam,
            eius.
          </p>
        </div>
        <div className="home__img">
          {homeImg.map((item,index)=>{
            return(
              <div className="home__items"  key={index}>
                <img src={item.imgUrl} alt="img" />
                <h5>{item.title}</h5>
                <p>{item.para}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
