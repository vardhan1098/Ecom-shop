import React, { createContext, useEffect, useState } from "react";

import {
  getProducts,
  getAmazon,
  getCategory,
  getPosts,
  getTrending,
  getWalmart,
  getNewProducts,
} from "./api";

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [walmart, setWalmart] = useState([]);
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState([]);
  const [amazon, setAmazon] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    getProducts()
      .then((response) => response.json())
      .then((data) => setProducts(data));
    getCategory()
      .then((response) => response.json())
      .then((data) => setCategory(data));
    getAmazon()
      .then((response) => response.json())
      .then((data) => setAmazon(data));
    getWalmart()
      .then((response) => response.json())
      .then((data) => setWalmart(data));
    getPosts()
      .then((response) => response.json())
      .then((data) => setPosts(data));
    getTrending()
      .then((response) => response.json())
      .then((data) => setTrending(data));
    getNewProducts()
      .then((response) => response.json())
      .then((data) => setAllProducts(data));
  }, []);

  // Add to Cart
  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };
  //Search

  const filteredData = allProducts.filter((item) =>
    item.title.toLowerCase().includes(searchItems.toLowerCase())
  );

  // Save cart items to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // remove items
  const removeFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const decreaseQuantity = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

// signup & signin









  return (
    <ProductContext.Provider
      value={{
        products,
        category,
        amazon,
        walmart,
        posts,
        trending,
        allProducts,
        addToCart,
        cartItems,
        removeFromCart,
        decreaseQuantity,
        showNotification,
        filteredData,
        searchItems,
        setSearchItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
