import React, { createContext, useContext, useState, useEffect } from "react";

const defaultContextData = {
  theme: "light",
  toggleTheme: () => {},
};

const ThemeContext = createContext(defaultContextData);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // default theme

  useEffect(() => {
    const themeBody = document.getElementById("theme-body");
    if (themeBody) {
      themeBody.className = theme;
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
