import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';


function Cart() {
  // --- Get all item in cart from redux store.
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const removeItem = (itemid) => {
    dispatch(remove(itemid))
  }
  return (
    <div className='CartItemMain'>
    {
      // --- Display all cart item here
      cartItems.map((item) => (
        <div key={item.id}>
        <img src={item.image} alt='' className='w-24'/>
        <div>{item.title}</div>
        <div>{item.price}</div>
        <button 
        className='bg-orange-600 text-white p-3' 
        // --- Remove cart item by product id
        onClick={()=> removeItem(item.id)}
        >
        Remove
        </button>
        </div>
      ))
    }
    </div>
  )
}

export default Cart