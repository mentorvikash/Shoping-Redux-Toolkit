import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {add} from '../store/cartSlice'
import { getProductDateApi } from '../store/productSlice'
import { STATUS } from '../store/productSlice'
// To get all state value
import { useSelector } from 'react-redux'

function Products() {
    const dispatch = useDispatch()
    const {data : products, status} = useSelector((state) => state.product)

    useEffect(() => {
        // --- by using thunk middleware
        
        dispatch(getProductDateApi())

        // --- without using thunk middleware
        // const getProductData = async () => {
        //     const response = await fetch('https://fakestoreapi.com/products');
        //     const data = await response.json();
        //     setProducts(data);
        // }
        // getProductData()
    }, [])

    // dispatch action to add to cart
    let handleCartItem = (product) => dispatch(add(product))
    
    // --- if loding what to display
    if (status ==  STATUS.LODING){
        return <h3>LODING....</h3>
    }

    // --- if error what to display
    if (status == STATUS.ERROR){
        return <h3 className='text-red-700 '>Something Went Wrong</h3>
    }

    // --- if we sucessesfully get data what to display
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