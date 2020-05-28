import { combineReducers } from "redux";
import cartList from '../Redux/Reducers/cartList'
const rootReducer = combineReducers({
  cart : cartList
});


export default rootReducer;
