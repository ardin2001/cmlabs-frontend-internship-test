'use client'
import { createContext } from 'react'
import useStatus from '../hook/useStatus';

const ThemeContext = createContext({})
function ThemeContextProvider({ children }: any) {
    const [theme, setTheme] = useStatus(false);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext}
export default ThemeContextProvider