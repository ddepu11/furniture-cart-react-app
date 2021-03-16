import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
  cart: [],
  loading: true,
  noOfItems: 0,
  orderTotal: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fething cart Data from API Furniture Cart API
  // API is deployed in Heroku
  const fetchCart = async () => {
    try {
      const res = await fetch(
        "https://furniture-cart-react-app.herokuapp.com/"
      );
      const { ok, cart } = await res.json();

      dispatch({ type: "SET_CART", payload: cart });
    } catch (error) {
      console.log(error);
    }
  };

  const removeCartItem = (id) => {
    // If returns false then remove that item
    const newCart = state.cart.filter((item) => item.id !== id);
    dispatch({ type: "REMOVE_CART_ITEM", payload: newCart });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    dispatch({ type: "COUNT_ITEMS" });
  }, [state.cart]);

  const increaseHowMany = (id) => {
    const newCart = state.cart.map((item) => {
      if (item.id === id) {
        item.howMany++;
        return item;
      } else {
        return item;
      }
    });
    dispatch({ type: "INC_COUNT", payload: newCart });
  };
  const decreaseHowMany = (id) => {
    let newCart = state.cart.map((item) => {
      if (item.id === id) {
        if (item.howMany !== 0) {
          item.howMany--;
        }
        return item;
      } else {
        return item;
      }
    });

    dispatch({ type: "DEC_COUNT", payload: newCart });
  };

  // Clear Cart
  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        loading: state.loading,
        increaseHowMany,
        decreaseHowMany,
        removeCartItem,
        noOfItems: state.noOfItems,
        orderTotal: state.orderTotal,
        clearAll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
