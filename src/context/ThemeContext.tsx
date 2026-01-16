import { useState, useMemo, type ReactNode } from 'react';
import { ThemeContext } from './useTheme'; 

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const contextValue = useMemo(() => ({
    darkMode,
    toggleTheme
  }), [darkMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};