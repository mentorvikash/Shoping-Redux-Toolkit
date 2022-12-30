import {createSlice} from '@reduxjs/toolkit'

// each slice have 3 element first is name of slice, state, reducer
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    // reducer are the pure function so it not change data outside it's scope. used to change state value
    reducers:{
        // reducer have number of action will directly intract with redux state.
        // action take 2 arguments: state and action. where state is same as internalState
        add(state, action){
            // here we push data to our initialState Array. Value coming form payload
            state.push(action.payload)
        },
        remove(state, action){
            // here we update our state value by removing a specific target value.
            return state.filter(data => data.id !== action.payload);
        }
    }
});

// Finally we export our action, so that we can use that in our application.
export const {add, remove} = cartSlice.actions; 
// Finally we export our action and reducer function
export default cartSlice.reducer

// Mistake:
// the name I create inside cartSlice is reducer (wrong) => reducers (correct)

