/**  Create global reducer and maintain slices*/

import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice'

//Create global reducer by combining reducers
const store = configureStore({
    reducer: {
        auth : authReducer
    }
})

export default store;