import Data from "../Data/Data"
const { createContext } = require("react");

const Cart = createContext();


function Context({children}) {
    const Products = Data.map((chat)=>({
        _id: chat._id,
        name: chat.name,
        price: chat.price,
        image: chat.image,
        inStock: chat.inStock,
        fastDelivery: chat.delevary ,
        rating: chat.rating,
    }));
  return <Cart.Provider value={Products}> {children}</Cart.Provider>;
}

export  {Context, Cart}