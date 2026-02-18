import { productbycategories } from "../data/data";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import styles from "../Styles/Products.module.css";
import type { ProductType } from "../data/data";
import { useCheckout } from "../Context/CheckoutContext";

const ProductsPage = () => {
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const categories = Object.keys(productbycategories);
  const {addtocart}=useCheckout();
  return (
    <div className={styles.container}>
      {!selectedCat && (
        <div className={styles.categoryList}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={styles.categoryButton}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {selectedCat && (
        <>
          <h2 className={styles.categoryTitle}>{selectedCat}</h2>
          <button
            onClick={() => setSelectedCat(null)}
            className={styles.backButton}
          >
            Back to categories
          </button>
          <div className={styles.productGrid}>
            {productbycategories[selectedCat].map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                AddtoCart={addtocart}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsPage;
