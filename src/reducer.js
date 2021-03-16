const reducer = (state, action) => {
  const cart = action.payload;

  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        cart,
        loading: false,
      };
      break;
    case "INC_COUNT":
      return {
        ...state,
        cart,
        loading: false,
      };
      break;

    case "DEC_COUNT":
      return {
        ...state,
        cart,
        loading: false,
      };
      break;
  }
};
export default reducer;
