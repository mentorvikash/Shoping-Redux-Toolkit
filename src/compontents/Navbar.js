import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <div >
            <div>LOGO</div>
            <div style={{display: "flex", justifyContent:"space-between", width: "15vw" }}>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>
            </div >
            <div>Cart Item: 0 </div>
        </div>
        </>
    )
}

export default Navbar