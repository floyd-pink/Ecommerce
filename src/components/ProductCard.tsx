import type { ProductType } from "../data/data";
import styles from "../Styles/ProductCard.module.css";

const ProductCard = ({
  product,
  AddtoCart,
  showButton = true,
  classname = ""
}: {
  product: ProductType;
  AddtoCart?: (product: ProductType) => void;   // ✅ optional single product
  showButton?: boolean;
  classname?: string;
}) => {
  return (
    <div className={`${styles.card} ${classname}`}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3>{product.name}</h3>
      <h3>{`Item Category: ${product.category}`}</h3>
      <p>{product.brand}</p>
      <p>${product.price}</p>
      {showButton && AddtoCart && (
        <button onClick={() => AddtoCart(product)}>
          🛒 Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
