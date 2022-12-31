import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// --- Define enum for our status.
export const STATUS = Object.freeze({
    IDEL: 'idel',
    ERROR: 'error',
    LODING: 'loading'
})

// --- Create product slice: setname, state, reducers 
const prductSlice = createSlice({
    name: 'product',
    // --- Define the state to be used and manupulate by this reducer.
    initialState: {
        data: [],
        // --- the default status to idel
        status: STATUS.IDEL 
    },
    // --- 1st way Create the reducer for simple thunk request. 
    // reducers :{
    //     setProducts(state, action){
    //         state.data = action.payload
    //     },
    //     setStatus(state, action){
    //         state.status = action.payload
    //     }
    // }

    // --- 2nd way when we use createAsyncThunk we have to create extraa reducer which is a function
    extraReducers: (builder) => {
        builder
        .addCase(getProductDateApi.pending, (state) => {
            state.status = STATUS.LODING
        })
        .addCase(getProductDateApi.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = STATUS.IDEL
        })
        .addCase(getProductDateApi.rejected, (state) => {
            state.status = STATUS.ERROR
        })
    }
})

export const {setProducts, setStatus} = prductSlice.actions
export default prductSlice.reducer

// --- define a thunk to get the data from the api directly in Reducer.
// --- thunk return a function 
// --- thunk can be created in two ways:

// --- 1st Way
// --- export const getProductDateApi =() =>{

//     return async function getProductThunk(dispatch, getState){
//         try{
//             dispatch(setStatus(STATUS.LODING))
//             const response = await fetch('https://fakestoreapi.com/products');
//             const data = await response.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUS.IDEL))
//         }catch(error){
//             dispatch(setStatus(STATUS.ERROR));
//             console.error(error.message)
//         }
//     }
// } 

// --- 2nd Way

export const getProductDateApi = createAsyncThunk( 'products/fetch', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data
})