import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
    // here we subscribe the cart state => as data change will get inform here.
    const cartItem = useSelector((state)=> state.cart) 
    return (
        <>
        <div >
            <div>LOGO</div>
            <div style={{display: "flex", justifyContent:"space-between", width: "15vw" }}>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>
            </div >
            <div>Cart Item: {cartItem.length}</div>
        </div>
        </>
    )
}

export default Navbar