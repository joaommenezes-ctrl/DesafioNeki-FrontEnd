import { createContext, useContext } from 'react';

export interface ThemeContextData {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const useTheme = (): ThemeContextData => {
  return useContext(ThemeContext);
};