import React, { useContext } from "react";
import "../App.css"
import Filter from "../Filter/Filter";
import SingleCart from "./SingleCart";
import { Cart } from "../context/Context";

function Homepage() {
const {state :{products}}  = useContext(Cart);
console.log(products);
  return (
    <div className="Homepage_container">
      <div className="Homepage_filter">
        <Filter />
      </div>
      <div className="Homepage_products">
        {products.map((prod) => (
          <SingleCart key={prod._id} prod={prod} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;

// import { CartState } from "./context/Context";
// import "./App.css";
// import Filter from "./components/Filter";
// import Rating from "./components/Rating";

// function Home() {
//   const {
//     state: { products },
//   } = CartState();
//   const {
//     state: { cart },
//     dispatch,
//   } = CartState();
//   console.log(products);
//   const productElements = products.map((product) => (
//     <div className="Home_Container" key={product._id}>
//       <h3>{product.name}</h3>
//       <p>Price: {product.price}</p>
//       <p>In Stock: {product.inStock}</p>
//       <p>fastDelivery: {product.fastDelivery}</p>
//       <p>
//         <Rating rating={product.rating} />
//       </p>
//       <img src={product.image} alt={product._id} />

//       {cart.some((p) => p.id === product.id) ? (
//         <button
//           onClick={() => {
//             dispatch({
//               type: "REMOVE_FROM_CART",
//               payload: product,
//             });
//           }}
//         >
//           remove from cart
//         </button>
//       ) : (
//         <button
//           onClick={() => {
//             dispatch({
//               type: "ADD_TO_CART",
//               payload: product,
//             });
//           }}
//           disabled={!product.inStock}
//         >
//           {!product.inStock ? "our of Stock" : "Add to Cart"}
//         </button>
//       )}
//     </div>
//   ));
//   return (
//     <div className="Home_SinglePage">
//       <div className="Home_FilterDiv">
//         <Filter />
//       </div>
//       <div className="Home_productDiv">{productElements}</div>
//     </div>
//   );
// }

// export default Home;
