import React, { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext();

export const ColorProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const DarkTheme = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
     <div
      className={` p-4 h-lvh flex flex-col justify-center items-center  ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } `}
    >
      <h1 className={`text-black font-bold  ${
        theme === "dark" ? "text-white" : "text-gray-500"
      }`}>
      {theme === 'dark' ? 'Dark Theme' : 'Light Theme'}</h1>
      <p className={`text-black font-bold  ${
        theme === "dark" ? "text-white" : "text-gray-500"
      }`}>See its incredible</p>
    <button
  onClick={handleToggleTheme}
  className="bg-blue-900 text-white font-semibold py-2 px-4 rounded shadow hover:bg-gray-400 transition duration-200"
>
  Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
</button>

      </div>
  );
};
