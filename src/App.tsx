import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Default from "./pages/Default";
import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import { useState } from "react";
import type { ProductType } from "./data/data";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SearchProduct from "./pages/SearchProduct";
import Checkout from "./pages/Checkout";
import { CheckoutProvider } from "./Context/CheckoutContext";
import Exit from "./Functionality/Exit";



const App = () => {
 
  
  return (
    <>
    <CheckoutProvider>

        <Navbar  />
          <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchProduct   />} />    
            <Route path="/checkout" element={ <Checkout />} />    
            <Route path="/bill" element={ <Exit />} />    
          </Routes>
        
    </CheckoutProvider>
    
    </>
  );
};

export default App;
