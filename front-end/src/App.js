import React from "react";
import "./app.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/Menu";
import ProductCard from "./components/productCard/ProductCard";
import Slider from "./components/slider/Slider";
import Header from "./components/header/Header";
import PopularItems from "./components/popular/PopularItems";

function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Slider/>
      <Menu/>
     <PopularItems/>
      <Routes>
        {/* <Route path="/" element={<ProductCard/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
