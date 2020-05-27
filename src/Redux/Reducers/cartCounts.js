const INITIAL_STATE = {
  cartCounts: 0,
};

// 카트에 들어가는 숫자 통제
export default function cartCounts(state = INITIAL_STATE, action ) {
  switch (action.type) {
    case "ADD_CART_COUNTS":
      return { ...state, cartCounts : state.cartCounts + 1 };
    case "REMOVE_CART_COUNTS":
      return { ...state, cartCounts: state.cartCounts -1 };
    default:
      return state;
  }
}