import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Suponiendo que tienes creadores de acciones para aumentar y disminuir la cantidad de artículos
import './ShoppingCart.css';

const ShoppingCart = () => {

  const dispatch = useDispatch();
  // Recuperación del Estado: La variable cartItems recupera el array de artículos del estado de la tienda de Redux 
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce(
     (total, item) => total + item.price * item.quantity , 0
  );

  const handleRemoveItem = itemId => {
    dispatch(removeItemFromCart(itemId));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleIncreaseQuantity = itemId => {
    dispatch(increaseItemQuantity(itemId));
  };
  const handleDecreaseQuantity = itemId => {
    dispatch(decreaseItemQuantity(itemId));
  };


  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
      {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.name} - ${item.price}</span>
            <div className="quantity-controls">
              <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <span> {item.quantity}</span>
              <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
            <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>{totalAmount ? <div>'El monto total es {totalAmount}</div> : ''}</div>
    </div>
    <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
  
    </>
  );
};

export default ShoppingCart;
