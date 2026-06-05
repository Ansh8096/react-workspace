import React, { createContext, useContext } from 'react'

// setting the default data objects in the 'ThemeContext' while creating the context...
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
});

// providing the ThemeContextProvider...
// export const ThemeContextProvider = <ThemeContext.Provider value={themeMode, blackTheme, whiteTheme}/>
export const ThemeContextProvider = ThemeContext.Provider;

// Custom hook that provides the global data objects declared in a 'ThemeContext'
export default function useTheme(){
    return useContext(ThemeContext);
}

