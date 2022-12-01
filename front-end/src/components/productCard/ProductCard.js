import React from "react";
import burger from "../../assets/pizza1.png";
import "./styles.css"
function ProductCard({product}) {
  return (
    <div className="container">
    <div className="product">
      <img src={product.img} alt="burger" style={{width:"100%",alignSelf:"center",height:"150px",    borderRadius: "20px"
}} />
      <div className="product-content">
        <h6 >{product.title}</h6>
        <h6 >price {product.price} birr</h6>
      </div>
    </div>
    </div>
  );
}

export default ProductCard;
