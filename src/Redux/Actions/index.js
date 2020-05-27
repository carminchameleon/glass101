
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export const addToCart = ( items, product ) => (dispatch) => {
  const cartItems = items.slice()
    // 장바구니에 있는지 없는지를 체크
  let productAlreadyIncart = false;
  cartItems.forEach(item => {
    if(item.id === product.id){
    productAlreadyIncart = true;
    item.count++
  }        
  });
  if(!productAlreadyIncart){
    cartItems.push({...product, count : 1})
}
  localStorage.setItem("cartItems",JSON.stringify(cartItems));
  return dispatch({type: ADD_TO_CART,
  payload : {
    cartItems : cartItems 
  }})
}
  

export const removeFromCart = ( items, product ) =>  (dispatch) =>{
  const cartItems = items.slice().filter( item => item.id !== product.id);
    localStorage.setItem('cartItems', cartItems )
    return dispatch( { type : REMOVE_FROM_CART, payload :
      {
      cartItems
    }})
}