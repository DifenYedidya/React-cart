import React from "react";
import "../styles/Cart.css";

function Cart(props) {

  const onSumTotal = () => {
    let total = 0;
    props.data.forEach((item) => {
      let productPrice = item.price * item.total_item;
      total += productPrice;
    })
    return `Rp. ${total}`;
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      <ul>
        {props.data.map((item, idx) => (
          <li key={idx}>
              <p>
                  {item.name} <span>{item.price}</span>
              </p>
              <div className="cart-control">
                <button onClick={() => props.onDecrementQty(item.id)}>-</button>
                <input type="number" value={item.total_item} readOnly/>
                <button onClick={() => props.onIncrementQty(item.id)}>+</button>
              </div>
          </li>
        ))}
      </ul>
      <h3>Total : {onSumTotal()}</h3>
    </div>
  );
}

export default Cart;
