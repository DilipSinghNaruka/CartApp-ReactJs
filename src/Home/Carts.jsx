import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Cart } from "../context/Context";
import "../cart.css"

function Carts() {
  const {
    state: { cart },dispatch
  } = useContext(Cart);
  console.log("here is cart page");
  console.log(cart);
  return (
    <div className="Carts_mainContainer">
      <div>
        {cart.map((prod) => (
          <div className="Carts_Container" key={prod._id}>
            <div className="Carts_images">
              <img src={prod.image} alt={prod._id} />
            </div>
            <div className="Carts_data1">
              <h3>{prod.name}</h3>
              <p>Price: {prod.price}</p>

              <p>
                <b>In Stock: </b>
                {prod.inStock}
              </p>
              <p>
                <b>FastDelivery:</b> {prod.fastDelivery}
              </p>
              <p>
                <b>Rating:</b> {prod.rating}
              </p>
            </div>
            <div className="Carts_button">
              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                  })
                }
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="CartsRight_container">
        <div className="CartsRight_container_inner">
          <h2>Here you can see yout total price </h2>
        </div>
      </div>
    </div>
  );
}

export default Carts;
