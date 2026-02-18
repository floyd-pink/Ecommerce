import { useCheckout } from "../Context/CheckoutContext";
import { useLocation, Navigate, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCheckout();
  const location = useLocation();
  const navigate = useNavigate();

  // ❌ Block direct access
  if (!location.state?.fromCart) {
    return <Navigate to="/cart" replace />;
  }

  // ❌ Safety: empty cart
  if (cart.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  // ✅ Calculate total
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div>
        <h2>Checkout</h2>

        {cart.map((item, index) => (
          <ul key={index}>
            <li><strong>{item.name}</strong></li>
            <li>Price: ${item.price}</li>
          </ul>
        ))}

        <hr />
        <h3>Total: ${total}</h3>
      </div>

      <div>
        <button
          onClick={() =>
            navigate("/exit", {
              state: { fromExit: true }
            })
          }
        >
          Bill now
        </button>
      </div>
    </>
  );
};

export default Checkout;
