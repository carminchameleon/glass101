export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};

export const addToOrderList = (product) => {
  return {
    type: "ADD_TO_ORDER_LIST",
    payload: {
      counts: 1,
      selected : true,
      ...product
        }
  };
};

export const removeFromOrderList = (product) => {
  return {
    type: "REMOVE_FROM_ORDER_LIST",
    payload: product,
  };
};

export const plusOrderCounts = (product) => {
  return {
    type: "PLUS_ORDER_COUNTS",
    payload: product,
  };
}


export const minusOrderCounts = ( product ) => {
  return {
    type: "MINUS_ORDER_COUNTS",
    payload: product,
  };
}



export const controlCheck = ( product ) => {
  return {
    type: "CONTROL_CHECK",
    payload: {
      selected: !product.selected,
      ...product
    }
  };
}


export const controlAllCheck = ( boolean ) => {
  return {
    type: "CONTROL_ALL_CHECK",
    payload: 
      boolean
  };
}


