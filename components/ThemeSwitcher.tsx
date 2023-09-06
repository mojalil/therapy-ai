"use client";

import { ThemeProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types';


const ThemeSwitcher = ({ children, ...props } : ThemeProviderProps ) => {
    return (
        <ThemeProvider attribute="class" {...props}>
            {children}
        </ThemeProvider>
    )
    }

export default ThemeSwitcher;