import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../redux/storeSlice';

export default function Reset() {

    const dispatch = useDispatch();
    const handleClear = ()=>{
        dispatch(clearCart());
    }
  return (
    <div>
      <button onClick={handleClear}>Clear</button>
    </div>
  )
}
