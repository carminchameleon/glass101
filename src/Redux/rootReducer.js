import { combineReducers } from "redux";
import cartCounts from './Reducers/cartCounts'

const rootReducer = combineReducers({
  cartCounts
});

export default rootReducer;
