import React, { useState, useEffect } from "react";
import styles from "../Styles/Default.module.css";
import Footer from "../components/Footer";
import type { ProductType } from "../data/data";
 
interface DefaultProps{
  results:ProductType[];
}
const Default: React.FC<DefaultProps>= ({results}) => {
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
      
       <div className={styles.resultsContainer}>
        {results.length > 0 ? (
          results.map((product) => (
            
            <div key={product.id} className={styles.productCard}>
              
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.brand}</p>
              <p>${product.price}</p>
               <p className={styles.categoryLabel}>
              Category: {product.category}
            </p>
            </div>
          ))
        ) : (
          <p>
            
          </p>
        )}
      </div>
  
     {<Footer/>}
      
    </div>
  );
};

export default Default;
