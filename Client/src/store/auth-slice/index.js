/** This slice will be used to maintain the authentication slice for redux */

import { createSlice } from "@reduxjs/toolkit";

//define initial authentication state
const initialState = {
    isAuthenticated : false,
    isLoading : false,
    user : null
}

//Create slice
const authSlice = createSlice({
    name : 'auth',
    initialState, 
    reducers : {
        //reducer funtion to set user info
        setUser: (state,action)=>{
            
        }
    }
})

export const {setUser} = authSlice.actions;
export default authSlice.reducer;  //export reducer to be used in store.js