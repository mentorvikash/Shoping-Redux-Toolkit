import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {add} from '../store/cartSlice'

function Products() {
    const [products, setProducts] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        const getProductData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        }
        getProductData()
    }, [])

    let handleCartItem = (product) => dispatch(add(product))
    

    // products && console.log(products);
    return (
        <div className='flex justify-between flex-wrap'>
            {
                products && products.map((product) => (
                    <div className='eachProduct p-3 m-3' key={product.id}>
                        <img className='h-36 w-36' src={product.image} alt="" /><br />
                        <h4 className='self-center'>{product.title.slice(20)}</h4>
                        <h5>{product.price}</h5>
                        <button
                            className='bg-slate-600 text-white p-1'
                            onClick={() => handleCartItem(product)}
                        >Add to Cart</button>
                    </div>
                ))
            }
        </div>

    )
}

export default Products