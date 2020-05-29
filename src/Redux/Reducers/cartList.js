const initialState = [];

export default function cartList(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      
      return state.filter((el) => el.id !== action.payload.id);
    default:
      return state;
  }
}
