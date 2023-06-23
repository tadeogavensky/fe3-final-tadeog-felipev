import { createContext, useEffect, useReducer } from "react";

export const initialState = {
  theme: "",
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "ADD_FAV":
      const updatedData = [...state.data, action.payload];
      localStorage.setItem("favData", JSON.stringify(updatedData));
      return { ...state, data: updatedData };
    case "REMOVE_FAV":
      const filteredData = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("favData", JSON.stringify(filteredData));
      return { ...state, data: filteredData };
    case "GET_FAVS":
      const favData = JSON.parse(localStorage.getItem("favData")) || [];
      return { ...state, data: favData };
    default:
      return state;
  }
};

export default reducer;

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setTheme = (theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  const addFav = (item) => {
    dispatch({ type: "ADD_FAV", payload: item });
    localStorage.setItem("favs", item);
  };

  const removeFav = (item) => {
    dispatch({ type: "REMOVE_FAV", payload: item });
  };

  const getFavs = () => {
    const favData = JSON.parse(localStorage.getItem("favData")) || [];
    dispatch({ type: "GET_FAVS", payload: favData });
  };

  const contextValues = {
    setTheme,
    addFav,
    removeFav,
    getFavs,
    state,
  };

  return (
    <ContextGlobal.Provider value={contextValues}>
      {children}
    </ContextGlobal.Provider>
  );
};
