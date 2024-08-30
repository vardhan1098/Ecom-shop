import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Main from './components/Main/Main';
import Context from './containers/Context';
import Header from './components/Header/Header';
import './index.css';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Footer from './components/Footer/Footer';
import Cart from './components/ProductDetails/Cart';
import Category from './components/Category/Category';
import Check from './components/CheckOut/Check';
import Order from './components/CheckOut/Order';
import Signin from './components/Login/Signin';
import Layout from './containers/Layout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Success from './components/CheckOut/Succes';

const stripePromise = loadStripe('pk_test_51PrC5LRqHVqGbytdSuzAzTGh8f0Sl3yVvQM4Rjapl0EMMnc4cADtOYM7b1HCSHmjM9r5wQl04HCMfyldamixGE8800535h7BFm');

const App = () => {
    return (
      <BrowserRouter>
      <Context>
        <Layout/>
        <Elements stripe={stripePromise}>
        <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Products' element ={<Products/>}/>
        <Route path='/ProductDetails/:id' element ={<ProductDetails/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Category' element={<Category/>}/>
        <Route path='/CheckOut' element={<Check/>}/>
        <Route path='/Orders' element={<Order/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
        </Elements>
      <Footer/>
      </Context>
      </BrowserRouter>
    );
};

export default App;