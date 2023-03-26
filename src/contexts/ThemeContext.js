import {useState, createContext} from 'react';

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({children})=>{
    const [darkTheme, setDarkTheme] = useState(false);

    return(
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}

// expo