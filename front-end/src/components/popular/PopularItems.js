import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "./pagination.css";
import "./navigation.css";
import "./styles.css";
import { Autoplay } from "swiper";
import image from "../../assets/burger.jpg";
import image2 from "../../assets/pizza1.png";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
import { useEffect, useState } from "react";
import { getProducts } from "../../api";
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function App() {
  SwiperCore.use([Autoplay]);
   const [products, setProducts] = useState([]);

   useEffect(() => {
     getProducts(null,"POPULAR").then((productset) => setProducts(productset));
   }, []);

  return (
    <div className="pop_container">
      <div className="title_wrapper">
        <div className="title_">
          <h2>popular products</h2>
        </div>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide
            style={{ position: "relative", border: "2px solid white" }}
          >
            <div
              style={{
                marginLeft: "30px",
                backgroundColor: "black",
                opacity: "0.9",
                position: "absolute",
              }}
            >
              <h5>{product.title} {product.price} birr </h5>
            </div>
            <img src={product.img} alt = "product.title"/>
          </SwiperSlide>
        ))}

        
        
      </Swiper>
    </div>
  );
}
