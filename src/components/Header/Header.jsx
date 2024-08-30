import React, { useState, useContext } from "react";
import "./Header.css";
import { ProductContext } from "../../containers/Context";
import { useNavigate } from "react-router-dom";

const Header = ({ showSearch }) => {
  const { cartItems,searchItems,setSearchItems} = useContext(ProductContext);

  const [Search, setSearch] = useState(false);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">
        <h2>Shopyee</h2>
      </div>
      <nav className="nav-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Products">Products</a>
        </li>
        <li>
          <a href="/Category">Category</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </nav>
      <div className="btn-right">
        {showSearch && (
          <button onClick={() => setSearch(!Search)} className="search-icon">
            <i className="bx bx-search"></i>
          </button>
        )}
        <button onClick={() => navigate("/Signin")}>
          <i className="bx bx-user"></i>
        </button>
        <button onClick={() => navigate("/Cart")} className="cart-button">
          <i className="bx bxs-shopping-bag"></i>
          <span className="cart-count-badge">{cartCount}</span>
        </button>
      </div>
      {Search && (
        <div className="search-bar">
          <input type="text" placeholder="Enter the products.." value={searchItems} onChange={(e)=> setSearchItems(e.target.value)}/>
          <button className="search-close" onClick={() => setSearch(false)}>
            <i className="bx bx-x"></i>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
