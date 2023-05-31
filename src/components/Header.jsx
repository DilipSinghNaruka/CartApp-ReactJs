import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Cart } from "../context/Context";
function Header() {
  
  const {
    state: { cart },
    dispatch,
  } = useContext(Cart);
  return (
    <>
      <div className="Header_container">
        <div className="header_other">
          <Link to="/">
            <div className="header_log">Suray</div>
          </Link>
          <div className="headerSearch">
            <input type="text" />
          </div>
          <div className="header_cartButton">
            <Link to="/cart">
              <button>
                Cart <span>{cart.length}</span>{" "}
              </button>
              
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
