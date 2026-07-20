import React from "react";

const ProductCard = ({ product,del }) => {
  // console.log(product);

  return (
    <div className="card">
      <div className="card-img">
        <img src={product.image} alt="" />
      </div>

      <div>
        <h2>{product.title.substring(0,10)}</h2>
        <p>{product.category}</p>
        <p>{product.price}</p>
      </div>
      <button onClick={()=>{ del(product.id)}}>Delete</button>
    </div>
  );
};

export default ProductCard;
