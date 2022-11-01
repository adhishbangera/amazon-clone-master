import React from "react";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const val = getBasketTotal(basket);
  //   console.log(val);
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{`$ ${val} `}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
};
export default Subtotal;
