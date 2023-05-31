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

function Context({ children }) {
  const reducer = (state, action) => {};
  const [state, dispatch] = useReducer(reducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}> {children}</Cart.Provider>;
}

export { Context, Cart };
