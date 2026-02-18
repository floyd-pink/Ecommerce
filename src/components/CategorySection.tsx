import React from 'react';
import type { ProductType } from '../data/data';
import styles from '../Styles/Category.module.css';
import ProductCard from './ProductCard';

interface CategoryProps {
  category: string;
  products: ProductType[];
  AddtoCart?: (product: ProductType) => void;   
}
  // to display in deafult by categories 
const CategorySection: React.FC<CategoryProps> = ({ category, products, AddtoCart }) => {
  return (
    <section className={styles.categorySection}>
      <h2 className={styles.categoryTitle}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      <div className={styles.productRow}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            AddtoCart={AddtoCart}
            showButton={true}
            classname={styles.categoryCard}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
