import style from '../Styles/AddtoCart.module.css';
import ProductCard from "../components/ProductCard";
import { useCheckout } from "../Context/CheckoutContext";
import ShopNow from '../Functionality/ShopNow';

const CartPage = () => {
  const { cart } = useCheckout();  
  return (
    <>
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
                classname={style.cardCard}
                showButton={false}  
                showRemove={true}    
              />
            </div>
          ))
        )}
      </div>
    </div>
    <div className={style.Checkout}>
          {cart.length>0&&(
            <ShopNow/>
          )}
         
        </div>
    </>
    
  );
};

export default CartPage;
