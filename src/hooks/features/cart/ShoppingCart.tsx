import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const ShoppingCart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.items.length > 0 ? (
        <ul>
          {cart.items.map(item => (
            <li key={item.id}>
              {item.title} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h3>Total Quantity: {cart.totalQuantity}</h3>
      <h3>Total Price: ${cart.totalPrice}</h3>
    </div>
  );
};

export default ShoppingCart;
