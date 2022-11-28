import React from "react";
// import Catagories from "./Components/catagories/Catagories";
// import Navbar from "./Components/navBar/Navbar";
// import Products from "./Components/products/Products";
// import Slider from "./Components/slider/Slider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Topbar from "./components/appbar/Appbar";
import Login from "./components/login/Login";
// import Home from "./Components/home/Home";
// import ProductList from "./Components/productList/ProductList";
// import ProductDetail from "./Components/productDetail/ProductDetail";
// import LogIn from "./Components/logIn/LogIn";
import { useSelector } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import ProductList from "./components/producList/productList";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const isAdmin = currentUser?.user.isAdmin;
  console.log(isAdmin);
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={isAdmin ? <Home /> : <Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
