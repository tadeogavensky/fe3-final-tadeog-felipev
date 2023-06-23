import { createContext, useReducer } from "react";

export const initialState = {
  theme: "",
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "ADD_FAV":
      return { ...state, data: [...state.data, action.payload] };
    case "REMOVE_FAV":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const setTheme = (theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  const addFav = (item) => {
    dispatch({ type: "ADD_FAV", payload: item });
  };

  const removeFav = (item) => {
    dispatch({ type: "REMOVE_FAV", payload: item });
  };

  const contextValues = {
    setTheme,
    addFav,
    removeFav,
    state,
  };

  return (
    <ContextGlobal.Provider value={contextValues}>
      {children}
    </ContextGlobal.Provider>
  );
};
