import React, { useEffect, useState } from "react";
import "./styles.css";
import ProductCard from "../productCard/ProductCard";
import { getProducts } from "../../api";

function Menu() {
  const [filter, setFilter] = useState("PIZZA");
  const [products,setProducts] = useState([])

  useEffect(()=>{
    getProducts(filter).then((productset)=>setProducts(productset))
  },[filter])

  return (
    <div className="menu" name = "menu">
      <h3 className="menu_title">--Our Menu--</h3>
      <div className="btn_group" style={{marginTop:"40px"}}>
        <button
          className={`filter-btn ${filter === "DESERT" ? "active__btn" : ""}`}
          onClick={() => setFilter("DESERT")}
        >
          Juice
        </button>
        <button
          className={`filter-btn ${filter === "PIZZA" ? "active__btn" : ""}`}
          onClick={() => setFilter("PIZZA")}
        >
          pizaa
        </button>

        <button
          className={`filter-btn ${filter === "CHICKEN" ? "active__btn" : ""}`}
          onClick={() => setFilter("CHICKEN")}
        >
          menu
        </button>
      </div>
      <div className="products">
        {products?.map((product) => (
          <ProductCard key={product.id} product = {product} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
