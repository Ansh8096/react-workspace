import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ThemeContextProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  // declaring the values...
  const [themeMode, setThemeMode]  = useState("light");
  
  const lightTheme = ()=>{
    setThemeMode("light");
  }
  
  const darkTheme = ()=>{
    setThemeMode("dark");
  }

  // Actual Change in the theme: 
  // This will change our themeMode (accessible in 'Card.jsx'), whenever the ThemeMode value changes...
  useEffect(()=>{
    const obj = document.querySelector('html');

    obj.classList.remove("light", "dark"); // removing the previous values, becauz we don't what value it may contain...

    obj.classList.add(themeMode);

  }, [themeMode])

  return (
    // themeMode, lightTheme, darkTheme are the values that we made accessible.
    <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}> 
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>
    
          <div className="w-full max-w-sm mx-auto">
             <Card/>
          </div>
        </div>
      </div>    
    </ThemeContextProvider>
  )
}

export default App


