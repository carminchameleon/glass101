const initialState = [];

export default function orderList(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_ORDER_LIST":
      return [...state, action.payload];
    case "REMOVE_FROM_ORDER_LIST":
      return state.filter((el) => el.id !== action.payload.id);

    case "PLUS_ORDER_COUNTS":
       let listForPlus = state.slice()
         listForPlus.forEach((el)=>{
        if(el.id === action.payload.id){
          el.counts++
        }
        })
        return listForPlus;

        case "MINUS_ORDER_COUNTS":
        let listForMinus = state.slice()
        listForMinus.forEach((el)=>{
        if(el.id === action.payload.id){
          el.counts--
        }
        })
        return listForMinus;

        case "CONTROL_CHECK":
          let listForControl = state.slice()
          listForControl.forEach((el) => {
            if(el.id === action.payload.id){
              el.selected = !el.selected
            }
          })
        return listForControl;

        case "CONTROL_ALL_CHECK":
          let listForControlAll = state.slice()
          listForControlAll.forEach((el) => {
               el.selected = action.payload
            }
          )
        return listForControlAll
        default:
      return state;
  }
}



// export const addToCart = (items, product) => (dispatch) => {
//   const cartItems = items.slice();
//   // 장바구니에 있는지 없는지를 체크
//   let productAlreadyIncart = false;
//   cartItems.forEach((item) => {
//     if (item.id === product.id) {
//       productAlreadyIncart = true;
//       item.count++;
//     }
//   });
//   if (!productAlreadyIncart) {
//     cartItems.push({ ...product, count: 1 });
//   }
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   return dispatch({
//     type: ADD_TO_CART,
//     payload: {
//       cartItems: cartItems,
//     },
//   });
// };
