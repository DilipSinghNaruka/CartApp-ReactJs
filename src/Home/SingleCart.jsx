import React, { useContext } from "react";
import { Cart } from "../context/Context";

function SingleCart({ prod }) {
  const { state,dispatch } = useContext(Cart);
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
















// To implement the functionality where pressing the "Add to Cart" button adds the product to the cart, you'll need to manage the state of the cart and handle the button click event. Here's an example of how you can achieve this using React:

// Create a Cart context to store and manage the cart state.
// Set up a reducer function to handle cart-related actions, such as adding items to the cart.
// Define a component for the "Add to Cart" button and use the useContext hook to access the cart context.
// Implement a click event handler for the button that dispatches an action to add the product to the cart.
// Here's an example implementation:

// jsx
// Copy code
// import React, { createContext, useContext, useReducer } from 'react';

// // Step 1: Create a Cart context
// const CartContext = createContext();

// // Step 2: Set up a reducer for cart actions
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// const initialState = [];

// // Step 3: Create a CartProvider component
// const CartProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(cartReducer, initialState);

//   return (
//     <CartContext.Provider value={{ cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Step 4: Create an AddToCartButton component
// const AddToCartButton = ({ product }) => {
//   const { dispatch } = useContext(CartContext);

//   const handleAddToCart = () => {
//     dispatch({ type: 'ADD_TO_CART', payload: product });
//   };

//   return (
//     <button onClick={handleAddToCart}>Add to Cart</button>
//   );
// };

// // Usage:
// function App() {
//   return (
//     <CartProvider>
//       {/* Your app components */}
//       <Product />
//       <CartPage />
//     </CartProvider>
//   );
// }

// function Product() {
//   const product = {
//     id: 1,
//     name: 'Product 1',
//     price: 10,
//     // Add other product properties as needed
//   };

//   return (
//     <div>
//       <h3>{product.name}</h3>
//       <p>Price: ${product.price}</p>
//       <AddToCartButton product={product} />
//     </div>
//   );
// }

// function CartPage() {
//   const { cart } = useContext(CartContext);

//   return (
//     <div>
//       <h2>Cart Page</h2>
//       {cart.map((product) => (
//         <div key={product.id}>
//           <h3>{product.name}</h3>
//           <p>Price: ${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
// In the above code, the CartProvider component wraps your app components and provides the CartContext to them. The cartReducer handles the cart actions, and the initial state is set to an empty array. The CartProvider component uses the useReducer hook to manage the cart state and provides the cart state and dispatch function through the context.

// The AddToCartButton component receives the product as a prop and accesses the dispatch function from the CartContext. The handleAddToCart function is called when the button is clicked, and it dispatches an action of type 'ADD_TO_CART' with the product as the payload.

// The Product component displays the product information and renders the AddToCartButton component, passing the

