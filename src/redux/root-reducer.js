import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

//Similar to store.js??
export default combineReducers({
    user: userReducer
});