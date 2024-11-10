import { createContext, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
