import { createContext, useContext, useState } from "react";
import type { ProductType } from "../data/data";

type CheckoutContextType = {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
  results: ProductType[];
  setResults: (results: ProductType[]) => void;
};

const CheckoutContext = createContext<CheckoutContextType | null>(null);

export const CheckoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ProductType[]>([]);
  const [results, setResults] = useState<ProductType[]>([]);

  const addToCart = (product: ProductType) =>
    setCart((prev) => [...prev, product]);

  const removeFromCart = (product: ProductType) =>
    setCart((prev) => prev.filter((item) => item.id !== product.id));

  return (
    <CheckoutContext.Provider value={{ cart, addToCart, removeFromCart, results, setResults }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) throw new Error("useCheckout must be used inside CheckoutProvider");
  return context;
};
