import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
  cart: [],
  loading: true,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCart = async () => {
    try {
      const res = await fetch("http://localhost:5000/");
      const { ok, cart } = await res.json();

      dispatch({ type: "SET_CART", payload: cart });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

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
    const newCart = state.cart.map((item) => {
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

  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        loading: state.loading,
        increaseHowMany,
        decreaseHowMany,
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
