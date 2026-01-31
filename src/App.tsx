import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Default from "./pages/Default";
import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import { useState } from "react";
import type { ProductType } from "./data/data";
import About from "./pages/About";
import Profile from "./pages/Profile";


const App = () => {
  const [cart, setCart] = useState<ProductType[]>([]);//to add in cart
  const [results,setResults]=useState<ProductType[]>([]);

  const addtocart = (product: ProductType) => {
    setCart((prevArray) => [...prevArray, product]);
  };

  return (
    <>
      <Navbar setResults={setResults} />
          <Routes>
            <Route path="/" element={<Default results={results} />} />
            <Route path="/products" element={<ProductsPage AddtoCart={addtocart} />} />
            <Route path="/cart" element={<CartPage cart={cart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        
    
    </>
  );
};

export default App;
