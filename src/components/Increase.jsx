import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/storeSlice';

export default function Increase() {

    const dispatch = useDispatch();
    const handleAddItem = ()=>{
        console.log('clicked add button');
        dispatch(addItem('chocolate'));
    }


  return (
    <div>
      <button onClick={handleAddItem}>Add</button>
    </div>
  )
}
