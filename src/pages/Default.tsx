import React, { useState, useEffect } from "react";
import styles from "../Styles/Default.module.css";
import Footer from "../components/Footer";

 import { productbycategories, type ProductType } from "../data/data";
import CategorySection from "../components/CategorySection";
interface DefaultProps{
  AddtoCart:(product:ProductType)=> void;
}
const Default:React.FC<DefaultProps>= ({AddtoCart}) => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>🛒 Welcome to MyShop</h1>
        <p className={styles.clock}>Current Time: {time}</p>
      </header>
      {Object.entries(productbycategories).map(([category,products])=>
    <CategorySection key={category} category={category} products={products} AddtoCart={AddtoCart}/>
      )}
     {<Footer/>}
      
    </div>
  );
};

export default Default;
