import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { selectCartItems,removeFromCart,clearCart } from "../../slices/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
// import "./styles.css";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
  
    const handleRemoveFromCart = (itemId) => {
      dispatch(removeFromCart(itemId));
    };
  
    const handleClearCart = () => {
      dispatch(clearCart());
    };
  
    return (
      <div>
        <h2>Shopping Cart</h2><FontAwesomeIcon icon={faCartPlus} size="2xl" style={{color: "#08c473",}} />
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id}>
              <h6>{item.id}</h6>
                <p>{item.title}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <button onClick={handleClearCart}>Clear Cart</button>
          </div>
        )}
      </div>
    );
  };
  
  export default Cart;
