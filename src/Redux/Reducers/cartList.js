import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  MINUS_FROM_CART,
} from "../Actions/index";

const INITIAL_STATE = {
  items: [],
};

// 카트에 들어가는 숫자 통제
export default function cartList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { items: action.payload.cartItems };
    case "REMOVE_FROM_CART":
      return { items: action.payload.cartItems };
    case "MINUS_FROM_CART":
      return { items: action.payload.cartItems };
    default:
      return state;
  }
}
