import React from 'react';
import { useSelector } from 'react-redux';

export default function CurrentValue() {

    // subscribing to the store using a selector
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems)
  return (
    <div>
      CurrentValue - 
      {cartItems.join(', ')}
    </div>
  )
}
