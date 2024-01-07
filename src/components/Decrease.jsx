import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/storeSlice';

export default function Decrease() {
    const dispatch = useDispatch();

    const handleRemoveItem = ()=>{
        dispatch(removeItem());
    }
  return (
    <div>
      <button onClick={handleRemoveItem}>Remove</button>
    </div>
  )
}
