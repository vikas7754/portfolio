"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import Cookies from "js-cookie";
export const themeContext = createContext();

const initialState = {
  darkMode: true,
};

const themeReducer = (state) => {
  const darkMode = Cookies.get("darkMode");
  if (state.darkMode || !darkMode) {
    document.body.classList.add("light");
    Cookies.set("darkMode", false);
  } else {
    if (document.body.classList.contains("light"))
      document.body.classList.remove("light");
    Cookies.set("darkMode", true);
  }
  return { darkMode: !state.darkMode };
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  useEffect(() => {
    const darkMode = Cookies.get("darkMode");
    if (darkMode === "false" || darkMode === false) {
      dispatch();
    }
  }, []);
  return (
    <themeContext.Provider
      value={{ themeState: state, dispatchTheme: dispatch }}
    >
      {props.children}
    </themeContext.Provider>
  );
};

export const ThemeConsumer = () => {
  const { themeState, dispatchTheme } = useContext(themeContext);
  return { darkMode: themeState.darkMode, dispatchTheme };
};
