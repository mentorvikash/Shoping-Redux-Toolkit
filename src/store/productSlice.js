import { createSlice } from "@reduxjs/toolkit"

export const STATUS = {
    IDEL: 'idel',
    ERROR: 'error',
    LODING: 'loading'
}

const prductSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.IDEL 
    },
    reducers :{
        setProducts(state, action){
            state.data = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        }
    }
})

export const {setProducts, setStatus} = prductSlice.actions
export default prductSlice.reducer

// here we define a thunk to get the data from the api directly in Reducer.
// thunk return a function 
export const getProductDateApi =() =>{

    return async function getProductThunk(dispatch, getState){
        try{
            dispatch(setStatus(STATUS.LODING))
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUS.IDEL))
        }catch(error){
            setStatus(STATUS.ERROR);
            console.error(error.message)
        }
    }
} 