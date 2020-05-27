const INITIAL_STATE = {
  cartList: []
};

// 카트에 들어가는 숫자 통제
export default function cartList(state = INITIAL_STATE, action ) {
  switch (action.type) {
    case "ADD_CART":
      return { ...state, cartList : state.cartList };
    case "REMOVE_CART_COUNTS":
      return { ...state, cartList: state.cartList };
    default:
      return state;
  }
}