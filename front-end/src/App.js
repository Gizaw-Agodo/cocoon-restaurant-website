import React from "react";
import "./app.css"
import { BrowserRouter} from "react-router-dom";
import Slider from "./components/slider/Slider";
import Header from "./components/header/Header";
import Testimonials from "./components/testimonials/Testimonial";
import Footer from "./components/footer/Footer";
import 'swiper/css/bundle'
import Contact from "./components/contact/contact";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Slider/>
      <Testimonials />
      <Contact />
      <Footer />
    </BrowserRouter>
  )}
// =======
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Menu from "./components/menu/Menu";
// import ProductCard from "./components/productCard/ProductCard";
// import Slider from "./components/slider/Slider";
// import Header from "./components/header/Header";
// import PopularItems from "./components/popular/PopularItems";
// import About from "./components/about/About";
// import Video from "./components/video/Video";
// import "./app.css"

// function App() {
//   return (
//     <>
//       <Header />
//       <Slider />
//       <Menu />
//       {/* <PopularItems /> */}
//       <About />
//       <Video/>
//     </>
// >>>>>>> f38fa714225e64360baab93b8e7b40607f00e935
//   );
// }

// export default App;
