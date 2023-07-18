import { createContext } from 'react';
import { Theme } from '../../const/theme';

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (_theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});
