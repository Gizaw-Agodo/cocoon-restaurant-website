import React from "react";
import Slider from "react-slick";
import { sliderData } from "../../fakedata";
import "./styles.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderItem() {
   const settings = {
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 3000,
   };
  return (
    <section style={{margin :40, height :"100vh"}} name = "home">
      <Slider {...settings} style = {{padding : 20}} className = "slider">
        {sliderData.map((item) => (
          <div key={item.id} className = "item">
            <div className="slider__wrapper">
              <div className="slider__content">
                <h2 >{item.title}</h2>
                <p>{item.desc}</p>
              </div>

              <div className="slider__img ">
                <img src={item.imgUrl} alt="" className="w-100 image" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default SliderItem;
