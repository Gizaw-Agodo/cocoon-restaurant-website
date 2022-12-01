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
  );
}

export default App;
