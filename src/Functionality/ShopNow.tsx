import { useNavigate } from "react-router-dom";

const ShopNow = () => {
  const navigate = useNavigate();

  return (
   <button onClick={()=>{navigate('/checkout',{state:{fromCart:true}})}}>
      Bill Now!!!
    </button>
  );
};

export default ShopNow;
