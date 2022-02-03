import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";

import userReducer from "./user/user.reducer";

//Similar to store.js??
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});