import React, { useState, useEffect } from "react";
import styles from "../Styles/Default.module.css";
import Footer from "../components/Footer";
import { useCheckout } from "../Context/CheckoutContext";
 import { productbycategories, type ProductType } from "../data/data";
import CategorySection from "../components/CategorySection";
interface DefaultProps{
  AddtoCart:(product:ProductType)=> void;
}
const Default= () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
   const{addtocart}=useCheckout();
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = new Date().toLocaleDateString( "en-US",
    { weekday: "long", //object that tells format 
      year: "numeric", 
       month: "long",
       day: "numeric" 
       });


  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>🛒 Welcome to MyShop</h1>
        <p className={styles.clockTime}>Current Time: {time}</p>
        <p className={styles.clockDate}>Today's Date: {date}</p>
      </header>
      {Object.entries(productbycategories).map(([category,products])=>
    <CategorySection key={category} category={category} products={products} AddtoCart={addtocart}/>
      )}
     {<Footer/>}
      
    </div>
  );
};

export default Default;
