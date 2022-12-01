import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/Menu";
import ProductCard from "./components/productCard/ProductCard";
import Slider from "./components/slider/Slider";
import Header from "./components/header/Header";
import PopularItems from "./components/popular/PopularItems";
import About from "./components/about/About";
import Video from "./components/video/Video";
import "./app.css"

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Menu />
      {/* <PopularItems /> */}
      <About />
      <Video/>
    </>
  );
}

export default App;
