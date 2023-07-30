import { createSlice } from "@reduxjs/toolkit"




const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers: {

        //
        // reducers are the functions that help us to change state
        add(state,action){


            state.push(action.payload)
        },
        remove(state,action){
           return state.filter(item => item.id !== action.payload)
        }
    }
})


export const {add,remove} = cartSlice.actions
export default cartSlice.reducer;


