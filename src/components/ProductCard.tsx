import type { ProductType } from "../data/data";
import styles from "../Styles/ProductCard.module.css";
import { useCheckout } from "../Context/CheckoutContext";

const ProductCard = ({
  product,
  showButton = true,
  showRemove = false,
  classname = "",
}: {
  product: ProductType;
  showButton?: boolean;
  showRemove?: boolean;
  classname?: string;
}) => {
  const { addToCart, removeFromCart } = useCheckout();  
  return (
    <div className={`${styles.card} ${classname}`}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3>{product.name}</h3>
      <h3>{`Item Category: ${product.category}`}</h3>
      <p>{product.brand}</p>
      <p>${product.price}</p>

      {showButton && (
        <button onClick={() => addToCart(product)}>  
        AddToCart
        </button>
      )}

      {showRemove && (
        <button onClick={() => removeFromCart(product)}> 
          Remove from cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
