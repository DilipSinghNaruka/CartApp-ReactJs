import Data from "../Data/Data";
const { createContext, useReducer } = require("react");

const Cart = createContext();

export const products = Data.map((chat) => ({
  _id: chat._id,
  name: chat.name,
  price: chat.price,
  image: chat.image,
  inStock: chat.inStock,
  fastDelivery: chat.delevary,
  rating: chat.rating,
}));
const reducer = (state, action) => {
    switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    // case "REMOVE_FROM_CART":
    //   return {
    //     ...state,
    //     cart: state.cart.filter((c) => c.id !== action.payload.id),
    //   };
    default:{
      console.log("chal lawde");
    }
  };
}

function Context({ children }) {
  
  const [state, dispatch] = useReducer(reducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}> {children}</Cart.Provider>;
}

export { Context, Cart };
