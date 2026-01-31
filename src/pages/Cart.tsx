import type { ProductType } from "../data/data";
import style from '../Styles/AddtoCart.module.css';
import ProductCard from "../components/ProductCard";

const CartPage = ({
  cart,
  AddtoCart,
}: {
  cart: ProductType[];
  AddtoCart: (product: ProductType) => void;
}) => {
  return (
    <div className={style.CartWrapper}>
      <div className={style.CartHeader}>
        <h2>🛒 Your Cart</h2>
      </div>
      <div className={style.CartProducts}>
        {cart.length === 0 ? (
          <p className={style.singleMSG}> No items in cart.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className={style.CartItem}>
              <ProductCard
                product={item}
                AddtoCart={AddtoCart}
                classname={style.cardCard}
                showButton={false} // hide add-to-cart button in cart
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartPage;
