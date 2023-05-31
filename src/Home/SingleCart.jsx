import React from "react";

function SingleCart({ prod }) {
  return (
    <>
      <div className="Single_productpage_Container" key={prod._id}>
        <div className="Single_productpage_images">
          <img src={prod.image} alt={prod._id} />
        </div>
        <div className="Single_productpage_data1">
          <h3>{prod.name}</h3>
          <p>Price: {prod.price}</p>
        </div>
        <div className="Single_productpage_data2">
          <p><b>In Stock: </b>{prod.inStock}</p>
          <p><b>FastDelivery:</b> {prod.fastDelivery}</p>
          <p><b>Rating:</b> {prod.rating}</p>
        </div>
        <div className="Single_productpage_button">
          <button>Add to Cart</button>
          <button>Remove to Cart</button>
        </div>
      </div>
    </>
  );
}

export default SingleCart;
