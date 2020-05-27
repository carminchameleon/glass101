

export const addCartCounts = () => {
  return {
    type: "ADD_CART_COUNTS",
  };
};

export const removeCartCounts = ()=> {
  return {
    type: "REMOVE_CART_COUNTS",
  };
};

export const addProduct = (product : {}) => {
  return {
    type : "ADD_PRODUCT",
    payload : product
  }
}
