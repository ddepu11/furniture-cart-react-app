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
        cart: cart.filter((item) => {
          if (item.howMany === 0) {
            // If returns false then remove that item
            return false;
          } else {
            return true;
          }
        }),

        loading: false,
      };
      break;
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cart,
        loading: false,
      };
      break;
    case "COUNT_ITEMS":
      const { noOfItems, orderTotal } = state.cart.reduce(
        (accumulator, currentItem) => {
          const { price, howMany } = currentItem;
          const toPay = howMany * price;

          accumulator.orderTotal = accumulator.orderTotal + toPay;
          accumulator.noOfItems = accumulator.noOfItems + howMany;
          return accumulator;
        },
        { noOfItems: 0, orderTotal: 0 }
      );

      return {
        ...state,
        noOfItems,
        orderTotal,
      };
  }
};
export default reducer;
