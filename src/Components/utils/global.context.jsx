import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const initialState = {
  theme: "",
  favs: [],
  dentists: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTISTS":
      return { dentists: [...action.payload] };

    case "SET_THEME":
      return { ...state, theme: action.payload };

    case "ADD_FAV":
      const updatedData = state.favs 
        ? [...state.favs, action.payload] //si ya hay favoritos, hace spread, los incorpora y trae el nuevo
        : [action.payload]; //si no hay trae el string entero
      localStorage.setItem("favData", JSON.stringify(updatedData)); //guarda el array en localStorage
      return { ...state, favs: updatedData };

    case "REMOVE_FAV":
      const filteredData = state.favs
        ? state.favs.filter((item) => item.id !== action.payload)
        : [];
      localStorage.setItem("favData", JSON.stringify(filteredData));
      console.log('filteredData :>> ', filteredData);
      return { ...state, favs: filteredData };
    default:
      return state;
  }
};

export default reducer;

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      dispatch({ type: "SET_DENTISTS", payload: res.data });
    });
  }, []);

  const setTheme = (theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  const addFav = (item) => {
    console.log("item :>> ", item);
    dispatch({ type: "ADD_FAV", payload: item });
  };

  const removeFav = (id) => {
    dispatch({ type: "REMOVE_FAV", payload: id });
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
