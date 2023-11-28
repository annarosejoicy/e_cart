import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],//to store more than value
    reducers:{
        //actions 
        //function to add item to the state
        addToWishlist :(state,action)=>{
            state.push(action.payload)
        },
        removeFromWislist :(state,action)=>{
            //filter - returns a  new array satisfying the condition
            return state.filter(item=>item.id!=action.payload)

        }

    }
    })

    export const {addToWishlist,removeFromWislist} = wishlistSlice.actions
    export default wishlistSlice.reducer