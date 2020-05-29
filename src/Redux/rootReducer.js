import { combineReducers } from "redux";
import cartList from '../Redux/Reducers/cartList'
import orderList from '../Redux/Reducers/orderList'
const rootReducer = combineReducers({
   cartList,
   orderList
});


export default rootReducer;
